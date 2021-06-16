"use strict";

const Benchmarkify = require("benchmarkify");
const npmStats = require('npm-stat-api');

const lineColumn = require("line-column");
const findLineColumn = require("find-line-column");
const LinesAndColumns = require("lines-and-columns").default;
const lineColumnMini = require("line-column-mini");

const fs = require("fs");

const tools = ["line-column", "find-line-column", "lines-and-columns", "line-column-mini"]

for (const tool of tools) {
    npmStats.stat(tool, '2020-01-01', '2021-06-15', (err, res) => {
        console.log(JSON.stringify(res))
    });
}


let benchmark = new Benchmarkify("Find lines and columns from index").printHeader();

const benchmarkInfos = [
    {
        "text": fs.readFileSync(__dirname + "/input/long.txt").toString(),
        "name": "long text",
    },
    {
        "text": fs.readFileSync(__dirname + "/input/medium.txt").toString(),
        "name": "medium text",
    },
    {
        "text": fs.readFileSync(__dirname + "/input/short.txt").toString(),
        "name": "short text",
    },
    {
        "text": fs.readFileSync(__dirname + "/input/really_short.txt").toString(),
        "name": "really short text",
    }
]

new Promise(async () => {

    for (const info of benchmarkInfos) {
        const nonCachedBenchmarkSuite = benchmark.createSuite("Non-cached search in " + info.name);

        nonCachedBenchmarkSuite.add(info.name + " + lines-and-columns ", function () {
            const index = Math.floor(Math.random() * info.text.length);
            new LinesAndColumns(info.text).locationForIndex(index);
        });

        nonCachedBenchmarkSuite.add(info.name + " + line-column", function () {
            const index = Math.floor(Math.random() * info.text.length);
            lineColumn(info.text).fromIndex(index);
        });

        nonCachedBenchmarkSuite.add(info.name + " + line-column-mini ", function () {
            const index = Math.floor(Math.random() * info.text.length);
            new lineColumnMini.lineCol(info.text, index);
        });

        nonCachedBenchmarkSuite.add(info.name + " + find-line-column", function () {
            const index = Math.floor(Math.random() * info.text.length);
            findLineColumn(info.text, index);
        });

        await nonCachedBenchmarkSuite.run();
    }
}).then();

