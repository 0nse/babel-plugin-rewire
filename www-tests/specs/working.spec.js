import { __Rewire__ as rewireAPI } from '../some-module';

describe('Working test', () => {
    beforeEach(() => {
        this.variable = 'a value';
    });

    /**
     * this is correctly preserved as long as nothing is being rewired
     */
    it('should be able to read the variable bound to userContext', () => {
        expect(this.variable).not.toBe(undefined);
        expect(this.variable).toBe('a value');
    });
});
