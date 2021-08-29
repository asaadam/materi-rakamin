import React from "react";
import RenderNama from "./RenderNama";
import PesanComponent from "./Pesan";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nama: "Belum Ada Nama" };
  }
  render() {
    return (
      <>
        <RenderNama nama={this.state.nama} />
        <PesanComponent
          ucapan='Halo'
          nama='Alif'
          style={{ backgroundColor: "lightblue" }}
          size='small'
          ditekan={(nama) => this.setState({ nama })}
        />
        <PesanComponent
          ucapan='Halo'
          nama='Tifa'
          style={{ backgroundColor: "orange" }}
          size='large'
          ditekan={(nama) => this.setState({ nama })}
        />
        <PesanComponent
          ucapan='Halo'
          nama='Aerith'
          style={{ backgroundColor: "pink" }}
          size='medium'
          ditekan={(nama) => this.setState({ nama })}
        />
      </>
    );
  }
}
