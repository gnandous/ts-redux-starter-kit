import { Action as ReduxAction } from 'redux';


const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export interface Action<T extends string, P = undefined> {
  type: T;
  payload: P;
}

export interface enthusiasmAction extends Action<INCREMENT_ENTHUSIASM> {};

export function enthusiasmActionCreator(): enthusiasmAction {
  return {
    type: INCREMENT_ENTHUSIASM,
  }
}

export default {
  enthusiasmAction,
};
