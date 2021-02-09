import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ReactRteSlate from '@jswork/react-rte-slate';
import { Toolbar, ButtonGroup, Button } from '@jswork/react-rte-ui';

// plugins
import Bold from '@jswork/slate-plugin-bold';
import Italic from '@jswork/slate-plugin-italic';
import Underline from '@jswork/slate-plugin-underline';
import Strikethrough from '@jswork/slate-plugin-strikethrough';
import Code from '@jswork/slate-plugin-code';
import Heading from '@jswork/slate-plugin-heading';
import Blockquote from '@jswork/slate-plugin-blockquote';
import Color from '@jswork/slate-plugin-color';
import BackgroundColor from '@jswork/slate-plugin-background-color';
import BulletedList from '@jswork/slate-plugin-bulleted-list';
import NumberedList from '@jswork/slate-plugin-numbered-list';
import ListItem from '@jswork/slate-plugin-list-item';
import Paragraph from '@jswork/slate-plugin-paragraph';
import Default from '@jswork/slate-plugin-default';

const CLASS_NAME = 'react-slate-classic';

export default class ReactSlateClassic extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    onChange: noop
  };

  handleClick = () => {
    console.log('click me!');
  };

  render() {
    const { className, ...props } = this.props;
    console.log(props);
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}>
        <ReactRteSlate
          plugins={[
            Bold,
            Italic,
            Underline,
            Strikethrough,
            Code,
            Heading,
            Blockquote,
            Color,
            BackgroundColor,
            BulletedList,
            NumberedList,
            ListItem,
            Paragraph,
            Default
          ]}
          {...props}
        />
      </div>
    );
  }
}
