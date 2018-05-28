import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { BaseAction, baseActionCreator } from '../../actions';
import { StoreState } from '../../types';
import Main from './Main';

export function mapStateToProps({ compiler, framework }: StoreState) {
  return {
    compiler,
    framework,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<BaseAction>) {
  return {
    onBase: () => dispatch(baseActionCreator()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
