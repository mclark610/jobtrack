/* ******************************************************** *
 * test_db_jobtrack.js
 *   - mongo db testing on CRUD operations
 * ******************************************************** */
const assert = require('chai').assert;
const {insert_jobtrack}   = require('../modules/db_jobtrack.js')

describe('insert_jobtrack', function() {
    it('insert_jobtrack should return non-null', function() {
        assert.equal(insert_jobtrack(),'01');
    })
    it('insert_jobtrack should return type string', function() {
        let data = {
            "test":"hello"
        }
        assert.typeOf(insert_jobtrack(data), 'string')
    })
})
