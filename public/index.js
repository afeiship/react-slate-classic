import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSlateClassic from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value:
      '<p>道可道，非常道；名可名，非常名。</p><p>无名，天地之始，有名，万物之母。</p>'
  };
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-slate-classic">
        <ReactSlateClassic
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
          className="mb-5"
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
