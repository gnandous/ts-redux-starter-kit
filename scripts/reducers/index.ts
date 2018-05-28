import { StoreState } from '../types'
import { BaseAction, Action, OTHERACTIONS } from '../actions';

export function rootReducer(
  state: StoreState = {
    compiler: 'Typescript',
    framework: 'React',
  },
  action: Action) {
  switch (action.type) {
    case OTHERACTIONS.PING:
      return {
        ...state,
        compiler: 'FlowType',
      }
    default:
      return state;
  }
}
