/**
 * Created by Andy Likuski on 2017.10.17
 * Copyright (c) 2017 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import * as R from 'ramda';
import {mergeStateAndProps, makeInnerJoinByLensThenFilterSelector} from './selectorHelpers.js';

describe('reselectHelpers', () => {
  test('mergeStateAndProps', () => {
    const state = {
      buster: 1,
      gob: 2,
      lindsay: {
        tobias: 1
      },
      michael: 4
    };
    const props = {
      lindsay: {
        maeby: 3
      }
    };
    expect(R.compose((theState, theProps) => theState, mergeStateAndProps)(state, props))
      .toEqual({
        buster: 1,
        gob: 2,
        michael: 4,
        lindsay: {
          tobias: 1,
          maeby: 3
        }
      });
  });

  test('makeInnerJoinByLensThenFilterSelector', () => {
    const stateLens = R.lensPath(['foos', 'bars']);
    const propsLens = R.lensPath(['bars']);
    const predicate = value => value.isSelected;
    const state = {
      foos: {
        bars: [{id: 'bar1', name: 'Bar 1'}, {id: 'bar2', name: 'Bar 2'}, {
          id: 'bar3',
          name: 'Bar 3'
        }]
      }
    };
    const props = {bars: {bar1: {id: 'bar1', isSelected: true}, bar2: {id: 'bar2'}}};
    const p = (a, b) => {
      return R.eqProps('id', a, b);
    };
    expect(makeInnerJoinByLensThenFilterSelector(p, predicate, stateLens, propsLens)(state, props)).toEqual(
      {bar1: {id: 'bar1', name: 'Bar 1', isSelected: true}}
    );
  });
});
