# react-slate-classic
> Classic editor based on react-rte-slate.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-slate-classic
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-slate-classic/dist/style.css";

  // or use sass
  @import "~@jswork/react-slate-classic/dist/style.scss";

  // customize your styles:
  $react-slate-classic-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSlateClassic from '@jswork/react-slate-classic';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-slate-classic">
          <ReactSlateClassic className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-slate-classic/


## license
Code released under [the MIT license](https://github.com/afeiship/react-slate-classic/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-slate-classic
[version-url]: https://npmjs.org/package/@jswork/react-slate-classic

[license-image]: https://img.shields.io/npm/l/@jswork/react-slate-classic
[license-url]: https://github.com/afeiship/react-slate-classic/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-slate-classic
[size-url]: https://github.com/afeiship/react-slate-classic/blob/master/dist/react-slate-classic.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-slate-classic
[download-url]: https://www.npmjs.com/package/@jswork/react-slate-classic
