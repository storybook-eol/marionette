import React, { FC } from 'react';
import { isNil } from 'lodash';
import { PropSummaryValue } from './PropDef';

interface PropValueProps {
  value?: PropSummaryValue | string;
}

interface PropTextProps {
  value: string;
}

interface PropSummaryProps {
  value: PropSummaryValue;
}

const EmptyProp = () => {
  return <span>-</span>;
};

const PropText: FC<PropTextProps> = ({ value }) => {
  return <span>{value}</span>;
};

const PropSummary: FC<PropSummaryProps> = ({ value }) => {
  const { summary, detail } = value;

  const title = !isNil(detail) ? detail : null;
  const style = {};

  if (!isNil(title)) {
    // @ts-ignore
    style.borderBottom = '1px solid blue';
  }

  return (
    <span title={title} style={style}>
      {summary}
    </span>
  );
};

export const PropValue: FC<PropValueProps> = ({ value }) => {
  if (isNil(value)) {
    return <EmptyProp />;
  }

  return typeof value !== 'object' ? <PropText value={value} /> : <PropSummary value={value} />;
};
