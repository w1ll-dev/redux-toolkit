export const Actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export type Action = {
  type: string;
  payload?: any;
};

export function increment(): Action {
  return {
    type: 'INCREMENT',
  };
}

export function decrement(): Action {
  return {
    type: 'DECREMENT',
  };
}
