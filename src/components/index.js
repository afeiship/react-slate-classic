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
import Bisu from './bisu';
import { Editor } from 'slate';

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

  constructor(inProps) {
    super(inProps);
    this.state = {
      editor: null,
      manager: null
    };
    this.plugins = [
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
    ];
  }

  handleInit = (inEvent) => {
    const { value, manager } = inEvent.target;
    console.log(value);
    window.editor = value;
    window.Editor = Editor;
    this.setState({ editor: value, manager });
  };

  render() {
    const { className, ...props } = this.props;
    const { editor } = this.state;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames('wsui-rte-icons', CLASS_NAME, className)}>
        {editor && (
          <Toolbar>
            <Bisu editor={editor} />
          </Toolbar>
        )}
        <ReactRteSlate
          onInit={this.handleInit}
          plugins={this.plugins}
          {...props}
        />
      </div>
    );
  }
}
