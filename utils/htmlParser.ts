import { marked } from 'marked';

export const parseHtml = (content : string) => {
  return marked.parse(content);
};