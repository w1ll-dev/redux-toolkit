import {Actions, Action} from './actions';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return (state += 1);
    case Actions.DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
}
