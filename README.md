# deep_clone_benchmarks
 > comparison of npm deep clone packages

## Local benchmark
* `yarn` to install all dependecies
* `yarn start` to start the benchmark with the default 1_000_000 iterations

   (change the hard coded MAX.PER in `index.js` to change the iterations amount)

## Personal results

![image](https://user-images.githubusercontent.com/78568641/164192523-16f1200e-aa6d-4665-bc77-076236137034.png)

| name              | time.ms  | time.op/s | errors.0                     | errors.1                   | errors.2                     |
| ----------------- | -------- | --------- | ---------------------------- | -------------------------- | ---------------------------- |
| klona_json        | 364.01   | 2,747,178 | Date object wasn't cloned    | Regex object wasn't cloned | Point.toString wasn't cloned |
| fastest_json_Copy | 544.54   | 1,836,408 | Point.toString wasn't cloned | assert.deepEqual error     |                              |
| rfdc              | 665.84   | 1,501,862 | Point.toString wasn't cloned | assert.deepEqual error     |                              |
| klona_light       | 823.09   | 1,214,935 |                              |                            |                              |
| klona             | 925.99   | 1,079,929 |                              |                            |                              |
| tily              | 1,134.81 | 881,205   | Point.toString wasn't cloned |                            |                              |
| deep_copy         | 1,151.11 | 868,728   | Point.toString wasn't cloned | assert.deepEqual error     |                              |
| nanoclone         | 1,404.48 | 712,007   | Point.toString wasn't cloned |                            |                              |
| nanoCopy          | 1,681.21 | 594,810   |                              |                            |                              |
| clone_deep        | 1,822.92 | 548,570   | Point object wasn't cloned   |                            |                              |
| just_clone        | 1,900.22 | 526,254   | Point.toString wasn't cloned |                            |                              |
| fast_copy         | 2,560.98 | 390,475   |                              |                            |                              |
| copy_anything     | 2,615.93 | 382,273   | Date object wasn't cloned    | Regex object wasn't cloned | Point object wasn't cloned   |
| ramda             | 2,971.76 | 336,500   |                              |                            |                              |
| klona_full        | 3,555.15 | 281,282   |                              |                            |                              |
| lodash_cloneDeep  | 3,895.55 | 256,703   |                              |                            |                              |
| clone             | 4,320.55 | 231,452   |                              |                            |                              |
| structuredClone   | 5,069.51 | 197,258   | Point.toString wasn't cloned |                            |                              |
