import { UPDATE_MARKDOWN } from '../../actionTypes';

function markdown(state = '', action) {
  switch (action.type) {
  case UPDATE_MARKDOWN:
    return action.markdown;
  default:
    return state;
  }
}

export default markdown;
