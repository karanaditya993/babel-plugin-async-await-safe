const pluginTester = require('babel-plugin-tester').default;
const plugin = require('../src/index.js');
const path = require('path');

pluginTester({
    plugin,
    fixtures: path.join(__dirname, 'fixtures'),
})
