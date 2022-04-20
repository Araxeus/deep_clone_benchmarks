# deep_clone_benchmarks
 > comparison of npm deep clone packages

## Local benchmark
* `yarn` to install all dependecies
* `yarn start` to start the benchmark with the default 1_000_000 iterations
  (change the hard coded MAX.PER in `index.js` to change the iterations amount)

## Personal results
| name              | time.ms  | time.ops | errors.0                     | errors.1                   | errors.2                     |
| ----------------- | -------- | -------- | ---------------------------- | -------------------------- | ---------------------------- |
| klona_json        | 377.382  | 2649832  | Date object wasn't cloned    | Regex object wasn't cloned | Point.toString wasn't cloned |
| fastest_json_Copy | 520.531  | 1921115  | Point.toString wasn't cloned | assert.deepEqual error     |                              |
| rfdc              | 747.711  | 1337416  | Point.toString wasn't cloned | assert.deepEqual error     |                              |
| klona_light       | 868.711  | 1151131  |                              |                            |                              |
| klona             | 890.976  | 1122365  |                              |                            |                              |
| deep_copy         | 1108.340 | 902250   | Point.toString wasn't cloned | assert.deepEqual error     |                              |
| tily              | 1127.964 | 886553   | Point.toString wasn't cloned |                            |                              |
| nanoclone         | 1369.630 | 730124   | Point.toString wasn't cloned |                            |                              |
| clone_deep        | 1644.928 | 607929   | Point object wasn't cloned   |                            |                              |
| nanoCopy          | 1695.090 | 589939   |                              |                            |                              |
| just_clone        | 1829.058 | 546729   | Point.toString wasn't cloned |                            |                              |
| fast_copy         | 2498.684 | 400211   |                              |                            |                              |
| copy_anything     | 2534.119 | 394614   | Date object wasn't cloned    | Regex object wasn't cloned | Point object wasn't cloned   |
| ramda             | 2877.113 | 347571   |                              |                            |                              |
| klona_full        | 3504.180 | 285374   |                              |                            |                              |
| lodash_cloneDeep  | 3821.007 | 261711   |                              |                            |                              |
| clone             | 4146.882 | 241145   |                              |                            |                              |
| structuredClone   | 4971.159 | 201160   | Point.toString wasn't cloned |                            |                              |
