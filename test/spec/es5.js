const assert = require('assert')
const context = require('../context/')
const africa = require('africa/es5/src')

const testAfricaEs5TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof africa, 'function')
    },
    'should call package without error'() {
        return africa('test-test-africa', {
            name: {
                text: 'Your name: ',
            },
        }, {
            force: true,
        })
    },
}

module.exports = testAfricaEs5TestSuite
