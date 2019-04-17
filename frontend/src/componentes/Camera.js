import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { clickButton } from '../actions/CameraActions';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';

class Camera extends Component {
  state = { cameraDescricao: '', cameraIp: '', cameraPorta: '' }

  cameraDescricao = event => { this.setState({ cameraDescricao: event.target.value }) }
  cameraIp = event => { this.setState({ cameraIp: event.target.value }) }
  cameraPorta = event => { this.setState({ cameraPorta: event.target.value }) }

  render() {
    const { clickButton, newValue } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Página de Cadastro Câmeras</h1>
        </header>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="p-12 sm:p-24 max-w-2xl">
                <Grid container spacing={24}>
                  <Grid item sm={3}>
                    <TextField
                      style={{ marginLeft: '1%', marginTop: '5%' }}
                      id="cameraDescricao"
                      name="cameraDescricao"
                      fullWidth
                      variant="outlined"
                      onChange={this.cameraDescricao} type='text' value={this.state.cameraDescricao}
                      label="Descrição da Câmera"
                    />
                  </Grid>
                  <Grid item sm={3}>
                    <TextField
                      style={{ marginTop: '5%' }}
                      id="cameraIp"
                      name="cameraIp"
                      fullWidth
                      variant="outlined"
                      onChange={this.cameraIp} type='text' value={this.state.cameraIp}
                      label="Ip da Câmera"
                    />
                  </Grid>
                  <Grid item sm={3}>
                    <TextField
                      style={{ marginTop: '5%' }}
                      id="cameraPorta"
                      name="cameraPorta"
                      fullWidth
                      variant="outlined"
                      onChange={this.cameraPorta} type='text' value={this.state.cameraPorta}
                      label="Porta da Câmera"
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="p-12 sm:p-24 max-w-2xl">
            <Grid container spacing={24}>
              <Grid item sm={3}>
                <button onClick={() => clickButton(this.state.cameraDescricao)}> Pesquisar RTSP </button>
                <h1>{newValue}</h1>
              </Grid>
            </Grid>
          </div>
        </div>
        <p className="App-intro">
          <Link to="/">Voltar</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
