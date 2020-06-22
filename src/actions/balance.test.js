import * as constants from './constants';
import * as actions from './balance';

describe('Balance', () => {

});

it('create an action to set the balamace', () => {
    const balance = 0;
    const expectedAction = { type: constants.SET_BALANCE, balance };
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('create an action to deposit into the balance', () => {
    const deposit = 10;
    const expectedAction = { type: constants.DEPOSIT, deposit };
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('create an action to `withdrawal` from the balance', () => {
    const withdrawalAmount = 5;
    const expectedAction = { type: constants.WITHDRAWAL, withdrawalAmount };
    expect(actions.withdrawal(withdrawalAmount)).toEqual(expectedAction);
});