import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    const mockFetchbitcoin = jest.fn();
    const props = { balance: 10, bitcoin: {} };
    const loot = shallow(<Loot  {...props} />);
    it('render properly', () => {
        expect(loot).toMatchSnapshot();
    });
    describe('when mounted', () => {

        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props}></Loot>)
        });

        it('dispatches the `fetchBitcoin()` method it recoves from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });

    describe('when there arevalid bitcoin props', () => {
        beforeEach(() => {
            props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1000' } } } };
            loot = shallow(<Loot {...props} />);

            it('displays the correct bitcoin value', () => {
                expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
            });
        });
    });

});
