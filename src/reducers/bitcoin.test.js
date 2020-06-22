import bitcoin from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitcoin Reducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index' };
    it('fetches and sets the bitcoin data', () => {
        expect(bitcoin({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })).toEqual(bitcoinData);
    });
});