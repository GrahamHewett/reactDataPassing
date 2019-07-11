import React from "react";

class Daughter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dinner: "crepes" };
  }
  updateMeal() {
    this.props.talkToDad(this.state.dinner);
  }

  render() {
    return (
      <div>
        <p>I am the daughter. My Dad's name is {this.props.mumName}</p>
        <button onClick={() => this.updateMeal()}>Send choice to Dad</button>
        <p>{this.props.brother !== "unknown"
          ? `My brother wants ${this.props.brother} for dinner`
          : `My brother hasn't chosen his dinner yet`}
		</p>
      </div>
    );
  }
}
export default Daughter;
