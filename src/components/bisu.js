import { Button, ButtonGroup } from '@jswork/react-rte-ui';
import Bold from '@jswork/slate-plugin-bold';
import Italic from '@jswork/slate-plugin-italic';
import Strikethrough from '@jswork/slate-plugin-strikethrough';
import Underline from '@jswork/slate-plugin-underline';
import React from 'react';

export default (inProps) => {
  const { editor } = inProps;

  return (
    <ButtonGroup className="wsui-rte-icons">
      <Button
        active={Bold.commands.is(editor)}
        tooltip="加粗"
        onMouseDown={(e) => {
          Bold.commands.toggle(editor, true);
        }}>
        <i className="wsui-icon-bold" />
      </Button>
      <Button
        active={Italic.commands.is(editor)}
        tooltip="倾斜"
        onMouseDown={(e) => {
          Italic.commands.toggle(editor, true);
        }}>
        <i className="wsui-icon-italic" />
      </Button>
      <Button
        active={Strikethrough.commands.is(editor)}
        tooltip="删除线"
        onMouseDown={(e) => {
          Strikethrough.commands.toggle(editor, true);
        }}>
        <i className="wsui-icon-strikethrough" />
      </Button>
      <Button
        active={Underline.commands.is(editor)}
        tooltip="下滑线"
        onMouseDown={(e) => {
          Underline.commands.toggle(editor, true);
        }}>
        <i className="wsui-icon-underline" />
      </Button>
    </ButtonGroup>
  );
};
