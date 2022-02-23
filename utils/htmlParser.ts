import highlightjs from 'highlight.js';
import { marked } from 'marked';
const renderer = () => {
  const render = new marked.Renderer();
  render.heading = (text: string, level: number) => {
    return `<h${level} class="h${level}">${text}</h${level}>`;
  };
  
  return render;
};

export const parseHtml = (content : string) => {
  return marked.parse(content);
};

export const toHTML = (content: string | null) => {
  if(!content) return null;
  
  return marked.parse(content, {
    renderer: renderer(),
    highlight: (code, lang) => {
      return highlightjs.highlightAuto(code, [lang]).value;
    }
  });
};