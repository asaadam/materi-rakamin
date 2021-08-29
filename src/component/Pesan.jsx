import React from "react";
import "./PesanCss.css";

export default class PesanComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  handleClick = () => {
    this.setState((current) => ({
      ...current,
      ucapan: "hola",
    }));
    this.props.ditekan(this.props.nama);
  };

  render() {
    return (
      <div
        className={`box box--${this.state.size}`}
        style={{
          fontStyle: "italic",
          ...this.state.style,
        }}>
        {`${this.state.ucapan} ${this.state.nama}`}
        <button onClick={this.handleClick}>Updater</button>
      </div>
    );
  }
}
