import { Button, ButtonGroup } from '@jswork/react-rte-ui';
import { Transforms } from 'slate';
import React from 'react';

export default (inProps) => {
  const { editor } = inProps;

  return (
    <ButtonGroup className="wsui-rte-icons">
      <Button
        tooltip="无序列表"
        onClick={(e) => {
          console.log('ul');
        }}>
        <i className="wsui-icon-unordered-list-item" />
      </Button>
      <Button
        tooltip="有序列表"
        onClick={(e) => {
          console.log('ol');
        }}>
        <i className="wsui-icon-ordered-list-item" />
      </Button>
    </ButtonGroup>
  );
};
