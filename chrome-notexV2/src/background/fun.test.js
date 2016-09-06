/**
 * Created by hard on 16-9-3.
 */

import fun from './fun';
import { expect,assert } from 'chai';

describe('User', function() {

    it('should save without error', function() {
        expect(fun()).to.be.a('number');
    });


    it('should save without error2', function() {
        assert.equal(fun(),4);
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});