import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';
import balance from './balance';

describe('balanceReducers', () => {

    describe('when intializing', () => {
        const balance = 10;
        it('sets a balance', () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
        });
        describe('then reintializing', () => {
            it('read the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('deposit into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit })).toEqual(initialState + deposit);
    });
    it('withdrawal into the balance', () => {
        const withdrawalAmount = 10;
        const initialState = 20;
        expect(balanceReducer(initialState, { type: constants.WITHDRAWAL, withdrawalAmount })).toEqual(initialState - withdrawalAmount);
    });
});