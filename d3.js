const d3 = require('d3');
const moize = require("moize").default;
const array = require('d3-array');
const scale = require('d3-scale');
const line = require('d3-shape').line;
const timeParse = require('d3-time-format').timeFormat;
const axisBottom = require('d3-axis').axisBottom;
const axisLeft = require('d3-axis').axisLeft;
const target = [0,2,-4,5, 8, 9];
const dataTarget = [
    { date: '2007-01-01T07:00:00.000Z', close: 93.24 },
    { date: '2007-01-21T07:00:00.000Z', close: 43.24 },
    { date: '2007-04-24T07:00:00.000Z', close: 93.24 },
    { date: '2007-04-25T07:00:00.000Z', close: 95.35 },
    { date: '2007-04-26T07:00:00.000Z', close: 98.84 },
    { date: '2007-04-27T07:00:00.000Z', close: 99.92 },
    { date: '2007-04-30T07:00:00.000Z', close: 99.8 },
    { date: '2007-05-01T07:00:00.000Z', close: 99.47 },
    { date: '2007-05-02T07:00:00.000Z', close: 100.39 },
    { date: '2007-05-03T07:00:00.000Z', close: 100.4 },
    { date: '2007-05-04T07:00:00.000Z', close: 100.81 },
    { date: '2007-05-07T07:00:00.000Z', close: 103.92 },
    { date: '2007-05-08T07:00:00.000Z', close: 105.06 },
    { date: '2007-05-09T07:00:00.000Z', close: 106.88 },
    { date: '2007-05-10T07:00:00.000Z', close: 107.34 },
    { date: '2007-05-11T07:00:00.000Z', close: 108.74 },
    { date: '2007-05-14T07:00:00.000Z', close: 109.36 },
    { date: '2007-05-15T07:00:00.000Z', close: 107.52 },
    { date: '2007-05-16T07:00:00.000Z', close: 107.34 },
    { date: '2007-05-07T07:00:22.000Z', close: 109.44 },
];
/*
console.log('extent',array.extent(target));
console.log('max',array.max(target));
console.log('min',array.min(target));
console.log('mean', array.mean(target));
console.log(array.bisect(target, 6));
const bisectDate = array.bisector(d => new Date(d.date)).right;
console.log(bisectDate(dataTarget, new Date('2007-05-07T07:00:22.000Z'), 1));
*/
const parseTime = timeParse('%B %d, %y');
const mData = dataTarget.map( d => ({
    close: d.close,
    date: parseTime(new Date(d.date))
}));
console.log(mData);
const xScale = scale.scaleTime()
    .rangeRound([0, 600])
    .domain(array.extent(mData, d => new Date(d.date)));

const yScale = scale.scaleLinear()
        .domain([0, array.max(dataTarget, d => d.close)])
        .rangeRound([600, 0])
        .nice();
const max = (data, fn) => array.max(data, fn);

const testScale = scale.scaleLinear()
                            .rangeRound([0, 100])
                            .domain([0, 100]);

console.log(testScale(150));