const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export enum OTHERACTIONS {
  PING,
  PONG,
}

export function baseActionCreator(): BaseAction {
  return {
    type: INCREMENT_ENTHUSIASM,
  };
}

export interface BaseAction {
  type: INCREMENT_ENTHUSIASM;
}

export interface ANOTHERBASEACTION {
  type: OTHERACTIONS.PING | OTHERACTIONS.PONG;
}

export type Action = BaseAction |
  ANOTHERBASEACTION;
