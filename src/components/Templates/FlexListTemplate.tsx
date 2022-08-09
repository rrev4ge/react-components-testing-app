import React, { CSSProperties } from 'react';

function FlexListTemplate({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  flexWrap = 'wrap',
  gap = 16,
  style = undefined,
}: {
  gap?: number | string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'nowrap' | 'wrap' | 'wrap-reverse';
  children?: React.ReactElement | React.ReactElement[] | React.ReactNode;
  style?: CSSProperties | undefined;
}): React.ReactElement {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexWrap,
        gap,
        justifyContent,
        alignItems,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default FlexListTemplate;
