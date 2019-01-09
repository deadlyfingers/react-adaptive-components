import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.scss';
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
        <header className="grid-container full">
          <div className="grid-x">
            <div className="cell small-12">
              <img src={logo} className="App-logo float-center" alt="logo" />
            </div>
            <div className="cell small-12">
              <div className="text-center margin">
                <code>src/App.js</code>
              </div>
            </div>
          </div>
        </header>
        <main className="grid-container fluid">
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-6">
              <AdaptiveSelect
                options={{ en: 'English', de: 'German', fr: 'French' }}
                value={selectedValue}
                onChange={this.handleSelectChange}
              />
            </div>
            <div className="cell small-12 medium-6">
              <AdaptiveDatePicker onChange={this.handleDateChange} value={selectedDate} />
            </div>
          </div>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
