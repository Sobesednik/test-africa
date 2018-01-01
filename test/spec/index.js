const assert = require('assert')
const context = require('../context/')
const testAfrica = require('../../src/')

const testAfricaTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testAfrica, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testAfrica()
        })
    },
}

module.exports = testAfricaTestSuite
