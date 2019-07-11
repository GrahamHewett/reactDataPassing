import React from "react";
import Son from "./Son";
import Daughter from "./Daughter";

class Dad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sonDinner: "unknown", daughterDinner: "unknown" };
  }

  talkToSon(meal) {
    this.setState({
      sonDinner: meal
    });
  }
  talkToDaughter(meal) {
    this.setState({
      daughterDinner: meal
    });
  }
  render() {
    return (
      <React.Fragment>
        <p>I am Dad. My son wants {this.state.sonDinner} for dinner</p>
        <p>My daughter wants {this.state.daughterDinner} for dinner</p>
        <Daughter
          talkToDad={meal => this.talkToDaughter(meal)}
          brother={this.state.sonDinner}
        />
        <Son talkToDad={meal => this.talkToSon(meal)} dadName="Adriana" />
      </React.Fragment>
    );
  }
}

export default Dad;
