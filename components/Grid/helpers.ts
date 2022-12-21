import * as React from 'react';

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

export interface BsPrefixOnlyProps {
  bsPrefix?: string;
}

export interface AsProp<As extends React.ElementType = React.ElementType> {
  as?: As;
}

export interface BsPrefixProps<As extends React.ElementType = React.ElementType>
  extends BsPrefixOnlyProps,
    AsProp<As> {}

export interface BsPrefixRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown,
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, BsPrefixProps<As> & P>>,
    context?: any,
  ): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export class BsPrefixComponent<
  As extends React.ElementType,
  P = unknown,
> extends React.Component<ReplaceProps<As, BsPrefixProps<As> & P>> {}