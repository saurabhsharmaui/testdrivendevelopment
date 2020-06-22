import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const mockDeposite = jest.fn();
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposite, withdrawal: mockWithdraw };


    const wallet = shallow(<Wallet  {...props} />);
    it('render properly', () => {
        expect(wallet).toMatchSnapshot();
    });
    it('display the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance:20');
    });
    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });
    describe('when the user types into the waller input', () => {
        const userBalance = '25';
        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance } })
        });
        it('updates the local wallet balance in state and converts it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });
        describe('and the user wants to maka a deposite', () => {
            beforeEach(() =>
                wallet.find('.btn-deposit').simulate('click')
            );
            it('dispatches the deposit() it rececives from props with locak balance', () => {
                expect(mockDeposite).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });
        describe('and the user wants to maka a withdraw', () => {
            beforeEach(() =>
                wallet.find('.btn-withdraw').simulate('click')
            );
            it('dispatches the withdraw() it rececives from props with locak balance', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });
    });



});

