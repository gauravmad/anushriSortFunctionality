import React, { Component } from 'react';

class JewelaryBrand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterState: 'Filter off',
    };
  }

  updateFilter = (value) => {
    this.setState({ filterState: value }, () => {
      if (typeof this.props.filterChangeCallback === 'function') {
        this.props.filterChangeCallback();
      } else {
        // Handle the case where filterChangeCallback is not a function
        console.error("filterChangeCallback is not a function");
      }
    });
  };
  

  doesFilterPass = (params) => {
    return params.data.jewellarytype === this.state.filterState;
  };

  radioBt = (value) => {
    return (
      <label key={value} htmlFor={`jewelarybrand-${value}`}>
        <input
          type="radio"
          id={`jewelarybrand-${value}`}
          name="jewelarybrand"
          value={value}
          checked={this.state.filterState === value}
          onChange={() => this.updateFilter(value)}
        />
        {value}
      </label>
    );
  };
   

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <div className="filter-title">{this.props.title}</div>
        {this.radioBt('Boucheron', true)}
        {this.radioBt('Tiffany', false)}
        {this.radioBt ("Cartier",false)}
        {this.radioBt ("Cuffs",false)}
        {this.radioBt ("Gucci",false)}
        {this.radioBt ("Bvlgari",false)}
        {this.radioBt ("Grisogono",false)}
        {this.radioBt ("Piaget",false)}
        {this.radioBt ("Louis Vuitton",false)}
        {this.radioBt ("Parade",false)}
        {this.radioBt ("Vancleef & Arpels",false)}
        {this.radioBt ("Chanel",false)}
        {this.radioBt ("Hermes",false)}
        {this.radioBt ("Mila Schon",false)}
        {this.radioBt ("Unoaerre",false)}
        {this.radioBt ("Breguet",false)}
        {this.radioBt ("Shaggie",false)}
        {this.radioBt ("Chaumet",false)}
        {this.radioBt ("Leo Pizzo",false)}
        {this.radioBt ("Omega",false)}
      </div>
    );
  }
}

export default JewelaryBrand;
