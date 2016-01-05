import { UPDATE_MARKDOWN } from '../actionTypes';

function updateMarkdown(markdown) {
  return {
    type: UPDATE_MARKDOWN,
    markdown: markdown,
  };
}

export default updateMarkdown;
