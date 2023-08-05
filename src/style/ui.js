import { css } from '@emotion/react';

const unit = 4;

export const spacing = {
  mgt: (value) => css`
    margin-top: ${value * unit}px;
  `,
  mgb: (value) => css`
    margin-bottom: ${value * unit}px;
  `,
  mgl: (value) => css`
    margin-left: ${value * unit}px;
  `,
  mgr: (value) => css`
    margin-right: ${value * unit}px;
  `,
  mgx: (value) => css`
    margin-left: ${value * unit}px;
    margin-right: ${value * unit}px;
  `,
  mgy: (value) => css`
    margin-top: ${value * unit}px;
    margin-bottom: ${value * unit}px;
  `,
  mg: (value) => css`
    margin-top: ${value * unit}px;
    margin-bottom: ${value * unit}px;
    margin-left: ${value * unit}px;
    margin-right: ${value * unit}px;
  `,
};
