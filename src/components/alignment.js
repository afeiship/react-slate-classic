import { Button, ButtonGroup } from '@jswork/react-rte-ui';
import { Transforms } from 'slate';
import React from 'react';

export default (inProps) => {
  const { editor } = inProps;

  return (
    <ButtonGroup className="wsui-rte-icons">
      <Button
        tooltip="左对齐"
        onClick={(e) => {
          Transforms.setNodes(editor, { style: { textAlign: 'left' } });
        }}>
        <i className="wsui-icon-align_left" />
      </Button>
      <Button
        tooltip="居中"
        onClick={(e) => {
          Transforms.setNodes(editor, { style: { textAlign: 'center' } });
        }}>
        <i className="wsui-icon-align_center" />
      </Button>
      <Button
        tooltip="右对齐"
        onClick={(e) => {
          Transforms.setNodes(editor, { style: { textAlign: 'right' } });
        }}>
        <i className="wsui-icon-align_right" />
      </Button>
      <Button
        tooltip="右对齐"
        onClick={(e) => {
          Transforms.setNodes(editor, { style: { textAlign: 'justify' } });
        }}>
        <i className="wsui-icon-align_justify" />
      </Button>
    </ButtonGroup>
  );
};
