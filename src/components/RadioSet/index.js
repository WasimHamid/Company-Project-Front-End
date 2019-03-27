import React from "react";

import Radio from "@material-ui/core/Radio";

class RadioSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // score: 0,
      numRadio: Array.from(Array(props.amount).fill())
    };
  }

  // handleChange = event => {
  //   const { value } = event.target;
  //   this.setState(() => ({
  //     score: parseInt(value)
  //   }));
  // };

  render() {
    return (
      <div>
        {this.state.numRadio.map((item, idx) => (
          <Radio
            checked={this.props.checked === idx + 1}
            onChange={this.props.onSelect}
            value={idx + 1}
            name="radio-button-set"
            aria-label={idx + 1}
          />
        ))}
      </div>
    );
  }
}

export default RadioSet;
