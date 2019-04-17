import { TextField, Grid, Button, Link } from '@material-ui/core';
import React, { Component } from 'react';

const MyLink = props => <Link to="/open-collective" {...props} />

class App extends Component {
  render() {
    return (
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    label="Porta da Câmera"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="row">
            <div className="p-12 sm:p-24 max-w-2xl">
              <Grid item sm={3} style={{ marginTop: '1%' }}>
                <Button component={MyLink}>Enviar</Button>
              </Grid>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
