const africa = require('africa')

/**
 * Invoke package's main function
 */
async function testAfrica() {
    const res = await africa('test-test-africa', {
        name: {
            text: 'Your name: ',
        },
    }, {
        force: true,
    })
    return res
}

module.exports = testAfrica
