import React, { Component } from 'react'

export default class Coin extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: '',
          name: '',
          rank: '',
          price_usd: '',
          price_btc: '',
          volume_usd: '',
          market_cap_usd: '',
          available_supply: '',
          total_supply: '',
          max_supply: '',
          percent_change_1h: '',
          percent_change_24h: '',
          percent_change_7d: '',
        }
      ]
    }
  }
  async componentDidMount() {
    const url = "https://api.coinmarketcap.com/v1/ticker/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].id);
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead style={{ alignSelf: 'center', alignItems: 'center', textAlign: 'center' }}>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price($)</th>
              <th>Market Capital ($)</th>
              <th>Available Supply</th>
              <th>Total Supply</th>
              <th>Changes Per Hour</th>
            </tr>
          </thead>
          <tbody style={{ alignSelf: 'center', alignItems: 'center', textAlign: 'center' }}>{this.state.data && this.state.data.map(data => {
            return (<tr>
              <td>{data.rank}</td>
              <td>{data.name}</td>
              <td>{data.price_usd}</td>
              <td>{data.market_cap_usd}</td>
              <td>{data.available_supply}</td>
              <td>{data.total_supply}</td>
              <td>{data.percent_change_1h}</td>
            </tr>);
          })}</tbody>
        </table>
      </div>
    )
  }
}
