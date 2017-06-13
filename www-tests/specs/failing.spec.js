import { __Rewire__ as rewireAPI } from '../some-module';

describe('Failing test', () => {
    beforeEach(() => {
        this.variable = 'a value';
        rewireAPI.__Rewire__('functionToRewire', () => {});
    });

    /**
     * Rewiring leads to this becoming undefined
     */
    it('should be able to read the variable bound to userContext', () => {
        expect(this.variable).not.toBe(undefined);
        expect(this.variable).toBe('a value');
    });

    afterEach(() => {
        rewireAPI.__ResetDependency__('functionToRewire');
    });
});
