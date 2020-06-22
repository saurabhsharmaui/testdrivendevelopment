import React, { Component } from 'react';
import { deposit, withdrawal } from '../actions/balance';
import { connect } from 'react-redux';

export class Wallet extends Component {
    constructor() {
        super();
        this.state = {
            balance: undefined
        }
    }
    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) });
    }
    deposit = () => {
        this.props.deposit(this.state.balance);
    }
    withdraw = () => {
        this.props.withdrawal(this.state.balance);
    }
    render() {
        return (
            <div>
                <h3 className="balance">Wallet Balance:{this.props.balance}</h3>
                <br />
                <input className="input-wallet" onChange={this.updateBalance}></input>
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>WithDraw</button>
            </div>
        )
    }
}

export default connect(state => {
    return {
        balance: state.balance
    }
}, { deposit, withdrawal })(Wallet);