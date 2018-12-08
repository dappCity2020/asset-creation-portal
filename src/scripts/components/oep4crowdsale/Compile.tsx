import * as React from 'react';
import { connect } from 'react-redux';
import { compile } from '../../actions/oep4Crowdsale';

interface Props {
  dispatch: any;
}

interface State {
  error: string;
}

const initialState = {
  error: null,
};

export default class Compile extends React.Component<Props, State> {

  private nameEle;
  private symbolEle;
  private decimalsEle;
  private supplyEle;
  private ownerAddrEle;
  private initialAmountEle;
  private tokensPerOntEle;

  constructor(props, state) {
    super(props, state);
    this.state = initialState;
  }

  render() {
    const { error } = this.state;

    return (
      <div className='oep4-token-details-form'>
        <h1>{'New Token Details w/ Crowdsale'}</h1>
        <div className='counterButtons'>

          <div>
            <div>{'Token name:'}</div>
            <input
              ref={ref => this.nameEle = ref}
              placeholder='eg. Sausage Coin'
              defaultValue='Sausage Coin'
            />
          </div>

          <div>
            <div>{'Token symbol:'}</div>
            <input
              ref={ref => this.symbolEle = ref}
              placeholder='eg. SGC'
              defaultValue='SGC'
            />
          </div>

          <div>
            <div>{'Token decimals:'}</div>
            <input
              ref={ref => this.decimalsEle = ref}
              type='number'
              placeholder='eg. 8'
              defaultValue='8'
            />
          </div>

          <div>
            <div>{'Token total supply:'}</div>
            <input
              ref={ref => this.supplyEle = ref}
              type='number'
              placeholder='eg. 1000000000'
              defaultValue='1000000000'
            />
          </div>

          <div>
            <div>{'Owner address:'}</div>
            <input
              ref={ref => this.ownerAddrEle = ref}
              placeholder='eg. AUr5QUfeBADq6BMY6Tp5yuMsUNGpsD7nLZ'
              defaultValue='AUr5QUfeBADq6BMY6Tp5yuMsUNGpsD7nLZ'
            />
          </div>

          <div>
            <div>{'Tokens sent to token owner on init:'}</div>
            <input
              ref={ref => this.initialAmountEle = ref}
              type='number'
              placeholder='eg. 200000000'
              defaultValue='200000000'
            />
          </div>

          <div>
            <div>{'Token exchange rate (tokens per ONT):'}</div>
            <input
              ref={ref => this.tokensPerOntEle = ref}
              type='number'
              placeholder='eg. 100'
              defaultValue='100'
            />
          </div>

          {error ? (
            <div className='error' >{error}</div>
          ) : ''}

          <button
            onClick={() => this.handleSubmit()}
          >
            {'Submit'}
          </button>

        </div>
      </div>
    );
  }

  handleSubmit() {
    const { dispatch } = this.props;

    if (!this.nameEle.value) {
      this.setState({error: 'Name is blank!'});
      return;
    }

    if (!this.symbolEle.value) {
      this.setState({error: 'Symbol is blank!'});
      return;
    }

    if (!this.decimalsEle.value) {
      this.setState({error: 'Decimals is blank!'});
      return;
    }

    if (isNaN(Number(this.decimalsEle.value))) {
      this.setState({error: 'Decimals is not a valid number!'});
      return;
    }

    if (!this.supplyEle.value) {
      this.setState({error: 'Total supply is blank!'});
      return;
    }

    if (isNaN(Number(this.supplyEle.value))) {
      this.setState({error: 'Total supply is not a valid number!'});
      return;
    }

    if (!this.ownerAddrEle.value) {
      this.setState({error: 'Owner address is blank!'});
      return;
    }

    if (!this.initialAmountEle.value) {
      this.setState({error: 'Initial amount is blank!'});
      return;
    }

    if (isNaN(Number(this.initialAmountEle.value))) {
      this.setState({error: 'Initial amount is not a valid number!'});
      return;
    }

    if (!this.tokensPerOntEle.value) {
      this.setState({error: 'Exchange rate is blank!'});
      return;
    }

    if (isNaN(Number(this.tokensPerOntEle.value))) {
      this.setState({error: 'Exchange rate is not a valid number!'});
      return;
    }

    dispatch(compile({
      tokenName: this.nameEle.value,
      symbol: this.symbolEle.value,
      decimals: this.decimalsEle.value,
      totalSupply: this.supplyEle.value,
      owner: this.ownerAddrEle.value,
      initialAmount: this.initialAmountEle.value,
      tokensPerOnt: this.tokensPerOntEle.value,
    }));
  }

}
