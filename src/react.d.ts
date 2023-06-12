import React from 'react';

export type ReactFCWithChildren<T = unknown> = React.FC<
  React.PropsWithChildren & T
>;
