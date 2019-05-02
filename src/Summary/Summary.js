import React, { Component } from 'react';
import '../App.css';


class Summary extends Component {
  render(){
    const total = Object.keys(this.props.state_Selected)
          .reduce((acc, curr) => acc + this.props.state_Selected[curr].cost, 0);
    const summary = Object.keys(this.props.state_Selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.props.state_Selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.state_Selected[key].cost) }
            </div>
        </div>)
    return (
    <React.Fragment>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(total) }
        </div>
      </div>
    </React.Fragment>


    )
  }
}

export default Summary
