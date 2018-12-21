import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import AdaptiveSelect from './components/AdaptiveSelect';
import AdaptiveDatePicker from './components/AdaptiveDatePicker';
import theme from './theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'en',
      selectedDate: new Date(),
    };
  }

  handleSelectChange = (selected) => {
    if (selected === undefined) return;
    console.log('selected value:', selected);
    this.setState({
      selectedValue: selected,
    });
  };

  handleDateChange = (selected) => {
    if (selected === undefined) return;
    console.log('selected date:', selected);
    this.setState({
      selectedDate: selected,
    });
  };

  render() {
    const { selectedValue, selectedDate } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>src/App.js</code>
            </p>
            <div className="container">
              <div className="form">
                <AdaptiveSelect
                  options={{ en: 'English', de: 'German', fr: 'French' }}
                  value={selectedValue}
                  onChange={this.handleSelectChange}
                />
                <AdaptiveDatePicker onChange={this.handleDateChange} value={selectedDate} />
              </div>
            </div>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
