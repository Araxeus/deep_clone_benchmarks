import * as cloners from './providers.js';
import fixture from './fixture.js';
import assert from 'assert';

const MAX = { PER: 1_000_000 };
const nanoToMs = n => (Number(n) / 1e6).toFixed(2);
const nanoToOps = n => Math.round(MAX.PER / (Number(n) / 1e9));
const prettyNum = n => Number(n).toLocaleString('en-US');

const results = [];

Object.entries(cloners).forEach(([name, cloner]) => {
    // time it
    const startTime = process.hrtime.bigint();
    for (let i = 0; i < MAX.PER; i++) {
        cloner(fixture);
    }
    const diff = process.hrtime.bigint() - startTime;

    const output = cloner(fixture);

    const result = {
        name,
        time: { ms: nanoToMs(diff), ops: nanoToOps(diff) }
    };

    const pushError = err => {
        result.errors ??= [];
        result.errors.push(err);
    };
    // Date
    if (output.o.o.d === fixture.o.o.d) {
        pushError("Date object wasn't cloned");
    }
    // Regex
    if (output.o.o.r === fixture.o.o.r) {
        pushError("Regex object wasn't cloned");
    }
    // Point Object
    if (output.o.o.p === fixture.o.o.p) {
        pushError("Point object wasn't cloned");
    }
    if (output.o.o.p.toString() !== 'POINT1') {
        pushError("Point.toString wasn't cloned");
    }
    try {
        assert.deepEqual(output, fixture);
    } catch (e) {
        pushError('assert.deepEqual error');
    } finally {
        results.push(result);
    }
});

results.sort((res1, res2) => res1.time.ms - res2.time.ms);

// json
console.dir(
    results.map(r => ({
        ...r,
        time: { ms: prettyNum(r.time.ms), ['op/s']: prettyNum(r.time.ops) }
    })),
    { depth: 2 }
);

// plaintext
//console.log(results.map(r => `${r.name}: ${r.time.ms}ms ${r.errors ? ', Errors: ' + r.errors : ''}`).join('\n'));

// pretty table
console.table(
    Object.fromEntries(
        results.map(res => [
            res.name,
            {
                ms: Number(res.time.ms),
                'op/s': res.time.ops,
                ...(res.errors ? { errors: res.errors } : undefined)
            }
        ])
    )
);
