import { Button, ButtonGroup } from '@jswork/react-rte-ui';
import { Transforms } from 'slate';
import React from 'react';
import ReactSelect from '@jswork/react-select';

const HEADING_ITEMS = [
  { label: '常规', value: 0 },
  { label: '标题1', value: 1 },
  { label: '标题2', value: 2 },
  { label: '标题3', value: 3 },
  { label: '标题4', value: 4 },
  { label: '标题5', value: 5 },
  { label: '标题6', value: 6 }
];

export default (inProps) => {
  const { editor } = inProps;

  return (
    <ReactSelect
      items={HEADING_ITEMS}
      onChange={(e) => {
        const value = Number(e.target.value);
        !value && Transforms.setNodes(editor, { type: 'paragraph' });
        value && Transforms.setNodes(editor, { type: 'heading', value });
      }}
    />
  );
};
