const assert = require('assert')
const context = require('../context/')
const testAfrica = require('../..')

const testAfricaTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testAfrica, 'function')
    },
    async 'should call package without error'() {
        const res = await testAfrica()
        console.log(res)
    },
}

module.exports = testAfricaTestSuite
