/**
 * Created by Andy Likuski on 2017.03.13
 * Copyright (c) 2017 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {geojsonByType} from './geojsonHelpers.js';
const osm = {
  type: 'FeatureCollection',
  generator: 'overpass-turbo',
  copyright: 'The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.',
  timestamp: '2017-04-06T22:46:03Z',
  features: [
    {
      type: 'Feature',
      id: 'way/188933607',
      properties: {
        '@id': 'way/188933607',
        area: 'yes',
        bridge: 'yes',
        layer: '1',
        public_transport: 'platform',
        railway: 'platform',
        '@timestamp': '2015-06-22T16:28:16Z',
        '@version': '2',
        '@changeset': '32142174',
        '@user': 'StellanL',
        '@uid': '28775'
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [
              -118.2359531,
              34.0634086
            ],
            [
              -118.2356572,
              34.0642587
            ],
            [
              -118.2357371,
              34.0642746
            ],
            [
              -118.2360308,
              34.0634263
            ],
            [
              -118.2359531,
              34.0634086
            ]
          ]
        ]
      }
    },
    {
      type: 'Feature',
      id: 'way/25599696',
      properties: {
        '@id': 'way/25599696',
        bridge: 'yes',
        electrified: 'contact_line',
        frequency: '0',
        gauge: '1435',
        layer: '1',
        name: 'Gold Line',
        network: 'Metrolink',
        railway: 'light_rail',
        source: 'survey;image;usgs_imagery',
        source_ref: 'AM909_DSCR9579',
        voltage: '750',
        '@timestamp': '2016-10-19T20:12:31Z',
        '@version': '16',
        '@changeset': '43018634',
        '@user': 'stevea',
        '@uid': '123633'
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [
            -118.2346686,
            34.0670648
          ],
          [
            -118.2347391,
            34.0669455
          ],
          [
            -118.2348043,
            34.066828
          ],
          [
            -118.2348577,
            34.0667141
          ],
          [
            -118.2349101,
            34.0666045
          ],
          [
            -118.2349722,
            34.066465
          ],
          [
            -118.2350312,
            34.0663232
          ],
          [
            -118.2350749,
            34.0662099
          ],
          [
            -118.2351306,
            34.0660662
          ],
          [
            -118.2351871,
            34.0659159
          ],
          [
            -118.235229,
            34.0658044
          ],
          [
            -118.2353526,
            34.065471
          ],
          [
            -118.2354425,
            34.0652107
          ],
          [
            -118.2355053,
            34.0650268
          ],
          [
            -118.235575,
            34.064817
          ],
          [
            -118.2356883,
            34.0644823
          ],
          [
            -118.2357537,
            34.0642801
          ],
          [
            -118.2359235,
            34.0638128
          ],
          [
            -118.2360976,
            34.0632734
          ],
          [
            -118.2361204,
            34.0632032
          ],
          [
            -118.2361557,
            34.0630814
          ],
          [
            -118.2361777,
            34.062965
          ],
          [
            -118.2361996,
            34.0628185
          ],
          [
            -118.2362079,
            34.0627155
          ],
          [
            -118.2362041,
            34.0625995
          ],
          [
            -118.2361895,
            34.0625012
          ],
          [
            -118.2361692,
            34.0623953
          ],
          [
            -118.2361388,
            34.0622866
          ],
          [
            -118.236091,
            34.0621542
          ],
          [
            -118.2360291,
            34.0620282
          ],
          [
            -118.2359711,
            34.0619312
          ],
          [
            -118.2358942,
            34.0618248
          ],
          [
            -118.2358127,
            34.0617232
          ],
          [
            -118.2357248,
            34.0616307
          ],
          [
            -118.2356377,
            34.0615488
          ],
          [
            -118.2355392,
            34.0614677
          ],
          [
            -118.2354403,
            34.0613988
          ],
          [
            -118.2353455,
            34.0613383
          ],
          [
            -118.2352513,
            34.0612808
          ],
          [
            -118.2350529,
            34.0611713
          ],
          [
            -118.2346709,
            34.0609545
          ],
          [
            -118.2345442,
            34.0608803
          ],
          [
            -118.2344614,
            34.0608307
          ],
          [
            -118.2343444,
            34.0607518
          ],
          [
            -118.2342319,
            34.0606717
          ],
          [
            -118.2341304,
            34.0605969
          ],
          [
            -118.2340405,
            34.060524
          ],
          [
            -118.2339424,
            34.0604397
          ],
          [
            -118.2338382,
            34.0603409
          ],
          [
            -118.2337511,
            34.0602542
          ],
          [
            -118.23367,
            34.0601637
          ],
          [
            -118.2336045,
            34.0600766
          ],
          [
            -118.2335486,
            34.0599861
          ],
          [
            -118.2335033,
            34.0598931
          ],
          [
            -118.2334743,
            34.059795
          ],
          [
            -118.2334507,
            34.0596924
          ],
          [
            -118.2334395,
            34.0595987
          ],
          [
            -118.2334415,
            34.0595198
          ],
          [
            -118.2334507,
            34.0594197
          ],
          [
            -118.2334656,
            34.0593409
          ],
          [
            -118.2334913,
            34.0592534
          ],
          [
            -118.2335222,
            34.0591759
          ],
          [
            -118.2335639,
            34.0590903
          ],
          [
            -118.2336153,
            34.0589939
          ],
          [
            -118.2338316,
            34.0586079
          ],
          [
            -118.2339113,
            34.0584654
          ],
          [
            -118.2340021,
            34.0582921
          ],
          [
            -118.234136,
            34.0580498
          ],
          [
            -118.2342141,
            34.0579046
          ],
          [
            -118.2343054,
            34.0577395
          ],
          [
            -118.2343926,
            34.0575798
          ],
          [
            -118.2344433,
            34.0574811
          ],
          [
            -118.2344883,
            34.0573844
          ],
          [
            -118.2345312,
            34.0572798
          ],
          [
            -118.2345632,
            34.0571823
          ],
          [
            -118.2345974,
            34.0570562
          ],
          [
            -118.2346319,
            34.0569792
          ]
        ]
      }
    },
    {
      type: 'Feature',
      id: 'way/188943651',
      properties: {
        '@id': 'way/188943651',
        bridge: 'yes',
        electrified: 'contact_line',
        frequency: '0',
        gauge: '1435',
        layer: '1',
        name: 'Gold Line',
        railway: 'light_rail',
        voltage: '750',
        '@timestamp': '2012-11-03T17:47:24Z',
        '@version': '1',
        '@changeset': '13737274',
        '@user': 'osm-sputnik',
        '@uid': '167417'
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [
            -118.2345031,
            34.05696
          ],
          [
            -118.2344887,
            34.0570432
          ],
          [
            -118.2344705,
            34.0571323
          ],
          [
            -118.2344471,
            34.0572321
          ],
          [
            -118.2344237,
            34.0573147
          ],
          [
            -118.2343942,
            34.0574131
          ],
          [
            -118.2343587,
            34.0575079
          ],
          [
            -118.2343136,
            34.0576092
          ],
          [
            -118.234259,
            34.0577155
          ],
          [
            -118.2341766,
            34.0578642
          ],
          [
            -118.2340864,
            34.0580316
          ],
          [
            -118.2339451,
            34.0582866
          ],
          [
            -118.2337838,
            34.0585847
          ],
          [
            -118.2336763,
            34.058775
          ],
          [
            -118.2335974,
            34.0589188
          ],
          [
            -118.233517,
            34.0590673
          ],
          [
            -118.2334693,
            34.0591621
          ],
          [
            -118.2334303,
            34.0592649
          ],
          [
            -118.2334078,
            34.0593546
          ],
          [
            -118.233393,
            34.0594459
          ],
          [
            -118.2333878,
            34.0595335
          ],
          [
            -118.2333887,
            34.0596197
          ],
          [
            -118.2333982,
            34.0597059
          ],
          [
            -118.2334156,
            34.0598014
          ],
          [
            -118.2334399,
            34.059884
          ],
          [
            -118.2334771,
            34.0599709
          ],
          [
            -118.2335135,
            34.0600327
          ],
          [
            -118.2335669,
            34.0601149
          ],
          [
            -118.2336429,
            34.0602105
          ],
          [
            -118.2337367,
            34.0603136
          ],
          [
            -118.2338465,
            34.0604193
          ],
          [
            -118.2339482,
            34.0605132
          ],
          [
            -118.2340843,
            34.0606229
          ],
          [
            -118.2342027,
            34.0607118
          ],
          [
            -118.2343198,
            34.060791
          ],
          [
            -118.2344773,
            34.0608931
          ],
          [
            -118.2345944,
            34.0609632
          ],
          [
            -118.2347673,
            34.0610648
          ],
          [
            -118.2350508,
            34.0612257
          ],
          [
            -118.2351913,
            34.0613068
          ],
          [
            -118.2353022,
            34.0613751
          ],
          [
            -118.2354046,
            34.0614462
          ],
          [
            -118.2354852,
            34.0615094
          ],
          [
            -118.2355626,
            34.0615762
          ],
          [
            -118.2356363,
            34.0616488
          ],
          [
            -118.2356996,
            34.0617156
          ],
          [
            -118.2357646,
            34.0617932
          ],
          [
            -118.235821,
            34.0618722
          ],
          [
            -118.2358791,
            34.0619533
          ],
          [
            -118.235932,
            34.0620532
          ],
          [
            -118.235984,
            34.062158
          ],
          [
            -118.2360195,
            34.0622543
          ],
          [
            -118.2360403,
            34.0623182
          ],
          [
            -118.2360672,
            34.0624101
          ],
          [
            -118.2360828,
            34.0625143
          ],
          [
            -118.2360941,
            34.0626199
          ],
          [
            -118.2360984,
            34.0627499
          ],
          [
            -118.2360898,
            34.0628619
          ],
          [
            -118.2360785,
            34.0629603
          ],
          [
            -118.2360646,
            34.0630321
          ],
          [
            -118.2360473,
            34.0630968
          ],
          [
            -118.2360117,
            34.063193
          ],
          [
            -118.2359927,
            34.0632526
          ],
          [
            -118.2359415,
            34.0634028
          ],
          [
            -118.2356467,
            34.0642582
          ],
          [
            -118.2356025,
            34.0643997
          ],
          [
            -118.2355453,
            34.0645692
          ],
          [
            -118.2354274,
            34.0649218
          ],
          [
            -118.2353424,
            34.065194
          ],
          [
            -118.2352072,
            34.065607
          ],
          [
            -118.2350996,
            34.0659317
          ],
          [
            -118.2350337,
            34.0661234
          ],
          [
            -118.2349774,
            34.0662735
          ],
          [
            -118.2349375,
            34.066382
          ],
          [
            -118.2348838,
            34.0665127
          ],
          [
            -118.2348274,
            34.0666377
          ],
          [
            -118.2347702,
            34.0667626
          ],
          [
            -118.2347043,
            34.0668869
          ],
          [
            -118.234654,
            34.0669738
          ],
          [
            -118.2346096,
            34.0670463
          ]
        ]
      }
    },
    {
      type: 'Feature',
      id: 'node/279043953',
      properties: {
        '@id': 'node/279043953',
        name: 'Chinatown',
        railway: 'station',
        '@timestamp': '2015-02-26T18:55:58Z',
        '@version': '6',
        '@changeset': '29120681',
        '@user': 'JoeFriday',
        '@uid': '1703904'
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -118.2359235,
          34.0638128
        ]
      }
    },
    {
      type: 'Feature',
      id: 'node/279044617',
      properties: {
        '@id': 'node/279044617',
        railway: 'switch',
        '@timestamp': '2012-11-03T18:04:42Z',
        '@version': '4',
        '@changeset': '13737516',
        '@user': 'osm-sputnik',
        '@uid': '167417'
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -118.2338316,
          34.0586079
        ]
      }
    },
    {
      type: 'Feature',
      id: 'node/1995653833',
      properties: {
        '@id': 'node/1995653833',
        railway: 'switch',
        '@timestamp': '2012-11-03T18:04:42Z',
        '@version': '2',
        '@changeset': '13737516',
        '@user': 'osm-sputnik',
        '@uid': '167417'
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -118.234136,
          34.0580498
        ]
      }
    },
    {
      type: 'Feature',
      id: 'node/1995746990',
      properties: {
        '@id': 'node/1995746990',
        railway: 'switch',
        '@timestamp': '2012-11-03T18:04:42Z',
        '@version': '2',
        '@changeset': '13737516',
        '@user': 'osm-sputnik',
        '@uid': '167417'
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -118.2340864,
          34.0580316
        ]
      }
    },
    {
      type: 'Feature',
      id: 'node/1995746998',
      properties: {
        '@id': 'node/1995746998',
        railway: 'switch',
        '@timestamp': '2012-11-03T18:04:42Z',
        '@version': '2',
        '@changeset': '13737516',
        '@user': 'osm-sputnik',
        '@uid': '167417'
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -118.2337838,
          34.0585847
        ]
      }
    },
    {
      type: 'Feature',
      id: 'node/279043953',
      properties: {
        '@id': 'node/279043953',
        name: 'Chinatown',
        railway: 'station',
        '@timestamp': '2015-02-26T18:55:58Z',
        '@version': '6',
        '@changeset': '29120681',
        '@user': 'JoeFriday',
        '@uid': '1703904'
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -118.2359235,
          34.0638128
        ]
      }
    }
  ]
};


describe('geojsonHelpers', () => {
  test('geojsonByType', () => {
    expect(geojsonByType(osm)).toMatchSnapshot();
  });
});
