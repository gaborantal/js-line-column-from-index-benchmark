# JavaScript benchmark for calculating line and column information from index

A benchmark of various tools can be used to calculate line and column information from index (offset).This benchmark is inspired by the benchmark available in [line-column](https://github.com/io-monad/line-column/tree/master/benchmark) module. This benchmark provides a comparison of 4 tools on 4 different input:

- [line-column](https://www.npmjs.com/package/line-column) (Published: 2016-03-26T01:56:03.714Z)
- [find-line-column](https://www.npmjs.com/package/find-line-column) (Published: 2014-06-20T18:13:04.175Z)
- [lines-and-columns](https://www.npmjs.com/package/lines-and-columns) (Published: 2016-12-20T17:32:14.921Z)
- [line-column-mini](https://www.npmjs.com/package/line-column-mini) (Published: 2021-05-24T04:58:59.357Z)

Each tool can be used to calculate the line and column of a given offset in a file.

## Test inputs

We created 4 different inputs:

- really_short.txt (6 lines, 348 B)
- short.txt (20 lines, 1.05 KB)
- medium.txt (33 lines, 18.5 KB)
- long.txt (1000 lines, 50.7 KB)

## Downloads (one year window started on 2020-06-15)

| Tool              | Published  | Downloads in the past year |
| ----------------- | ---------- | -------------------------: |
| line-column       | 2016-03-26 |                 40,351,088 |
| find-line-column  | 2014-06-20 |                  3,751,222 |
| lines-and-columns | 2016-12-20 |                529,542,382 |
| line-column-mini  | 2021-05-24 |                      1,313 |

## Results

### Platform info
   Windows_NT 10.0.19042 x64
   Node.JS: 14.17.0
   V8: 8.4.371.23-node.63
   Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz × 16

### Really small input

```
lines-and-columns        -22,05%      (1 755 725 rps)   (avg: 569ns)
line-column                   0%      (2 252 469 rps)   (avg: 443ns)
line-column-mini         -11,56%      (1 992 123 rps)   (avg: 501ns)
find-line-column         -49,64%      (1 134 240 rps)   (avg: 881ns)
```

### Small input

```
lines-and-columns        -49,11%        (561 059 rps)   (avg: 1μs)
line-column                   0%      (1 102 409 rps)   (avg: 907ns)
line-column-mini         -39,67%        (665 131 rps)   (avg: 1μs)
find-line-column         -47,93%        (574 009 rps)   (avg: 1μs)
```

### Medium input

```
lines-and-columns        -62,89%         (32 975 rps)   (avg: 30μs)
line-column                   0%         (88 870 rps)   (avg: 11μs)
line-column-mini          -53,2%         (41 590 rps)   (avg: 24μs)
find-line-column         -47,05%         (47 056 rps)   (avg: 21μs)
```

### Large input

```
lines-and-columns        -60,63%         (11 658 rps)   (avg: 85μs)
line-column                   0%         (29 613 rps)   (avg: 33μs)
line-column-mini         -52,14%         (14 172 rps)   (avg: 70μs)
find-line-column          -47,1%         (15 665 rps)   (avg: 63μs)
```

## Running on own input

It's very easy! Just add your test file into the input folder, and extend `benchmarkInfos` with your file and give that input a name. Of course, you can remove the benchmark's example and just use your own input.

```javascript
const benchmarkInfos = [
    {
        "text": fs.readFileSync(__dirname + "/input/long.txt").toString(),
        "name": "long text",
    },
    {
        "text": fs.readFileSync(__dirname + "/input/my_own_input.txt").toString(),
        "name": "MY OWN INPUT",
    },
]
```

## Contributing

If you have found another eligible tool, and would like to add it to this benchmark, just send a pull request with the extended benchmark.