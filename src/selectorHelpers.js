/**
 * Created by Andy Likuski on 2017.10.17
 * Copyright (c) 2017 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import Result from 'folktale/result/index.js';
import {filterWithKeys, mapPropValueAsIndex, mergeDeep, flattenObj, unflattenObj} from '@rescapes/ramda';
import * as R from 'ramda';

/**
 * Object statuses
 * @type {{IS_SELECTED: string, IS_ACTIVE: string}}
 */
export const STATUS = {
  IS_SELECTED: 'isSelected',
  IS_ACTIVE: 'isActive'
};

/**
 * Object to lookup a particular status
 * @type {{}}
 * @returns {Object} Object keyed by status key and valued a function that resolves the value of that
 * status property for whatever object is passed to it
 */
export const status = R.fromPairs(
  R.map(
    theStatus => [theStatus, R.prop(theStatus)],
    [STATUS.IS_SELECTED, STATUS.IS_ACTIVE]
  )
);

export const mergeStateAndProps = (state, props) => mergeDeep(state, props);

/**
 * Makes a selector that merges a props object with a state object at a certain matching lens location,
 * and then filters the result of the merge based on the given predicate. This is used for example:
 * If there are Region objects in the state and User object as the props that contains Regions,
 * the lens is R.lensProp('regions') and checks to see which regions of the user are active and
 * returns the regions of the state that match.
 *
 * The predicate checks properties appended to the userSettings version of the data, such as
 * checking for keys like 'isSelected' or 'willDelete' or 'willAdd'
 * @param {Function} innerJoinPredicate Predicate to determine whether each item targeted by stateLens and propLens
 * @param {Function} predicate Predicate that expects each merged value of the container of the lens
 * @param {Function} stateLens Ramda lens to winnow in on the property of the state to be merged with props and then filtered
 * @param {Function} propsLens Ramda lens to winnow in on the props to merge with the target of the state lens
 * for the state and userSettings. It's possible for a value to only exist in the state and not
 * in the userSettings (and possibly visa-versa if the user is creating something new). These will
 * be included in the merge and run through the predicate
 * @returns {Function} A selector expecting a state and props that returns the filtered merged value pointed to by the lens
 *
 * Example:
 * lens R.lensPath(['foos', 'bars'])
 * predicate value => value.isSelected
 * state: {foos: {bars: [{id: 'bar1', name: 'Bar 1'}, {id: 'bar2', name: 'Bar 2'}]}}
 * props: {foos: {bars: {bar1: {id: 'bar1', isSelected: true}, bar2: {id: 'bar2'}}}}
 * returns: {bar1: {id: 'bar1', name: 'Bar 1' isSelected: true}}
 */
export const makeInnerJoinByLensThenFilterSelector = (innerJoinPredicate, predicate, stateLens, propsLens) => (state, props) => {
  return R.compose(
    // Combine the lens focused userValue and state value if they pass the innerJoinPredicate
    filterWithKeys(
      (value, key) => {
        return predicate(
          value
        );
      }
    ),
    R.map(
      // Finally extract the result value
      result => result.unsafeGet()
    ),
    R.filter(
      // Filter for Result.Ok
      result => Result.Ok.hasInstance(result)
    ),
    args => R.mergeWith(
      (l, r) => R.ifElse(
        // Do they pass the inner predicate? (use .value since Left.get() isn't allowed)
        ([ll, rr]) => R.apply(innerJoinPredicate, [ll.value, rr.value]),
        // Yes pass, convert to Result.Ok
        ([ll, rr]) => Result.Ok(R.apply(mergeDeep, [ll.value, rr.value])),
        // Fail, empty Left
        ([ll, rr]) => Result.Error()
      )([l, r]),
      ...args),
    R.map(
      // Make sure each is keyed by id before merging
      // Mark everything as Result.Error initially. Only things that match and pass the innerJoin predicate
      // will get converted to Result.Ok
      items => R.map(Result.Error, mapPropValueAsIndex('id', items))
    )
  )([R.view(stateLens, state), R.view(propsLens, props)]);
};

