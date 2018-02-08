/* global describe it */

const { expect } = require('chai')
const lib = require('./index')

describe('nootstrap-cli module', () => {
    it('contains noop function', () => {
        expect(typeof lib.noop).to.equal('function')
    })
})
