import { Button, ButtonGroup } from '@jswork/react-rte-ui';
import { Transforms } from 'slate';
import React from 'react';
import ReactSelect from '@jswork/react-select';

const FONT_SIZE_ITEMS = [
  { label: '12号', value: 12 },
  { label: '16号', value: 16 },
  { label: '18号', value: 18 },
  { label: '30号', value: 30 }
];

export default (inProps) => {
  const { editor } = inProps;

  return (
    <ReactSelect
      items={FONT_SIZE_ITEMS}
      onChange={(e) => {
        const value = Number(e.target.value);
        Editor.addMark(editor, 'font-size', `${value}px`);
      }}
    />
  );
};
