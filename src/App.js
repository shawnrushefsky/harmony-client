import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './TopBar';
import InputBox from './InputBox';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <TopBar />
          <InputBox />
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
