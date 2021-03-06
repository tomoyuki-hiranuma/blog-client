import highlightjs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { marked } from 'marked';

const renderer = () => {
  const render = new marked.Renderer();
  render.heading = (text: string, level: number) => {
    return `<h${level} class="h${level}">${text}</h${level}>`;
  };
  render.image = (href: string, title: string, text: string) => {
    return `<img src="${href}" alt="${text}" width="500px" />`;
  };
  render.listitem = (text: string) => {
    return `<li style="margin-left: 24px;">${text}</li>`;
  };

  return render;
};

export const parseHtml = (content : string) => {
  return marked.parse(content);
};

export const toHTML = (content: string | null) => {
  if(!content) return null;

  highlightjs.registerLanguage("javascript", javascript);
  highlightjs.registerLanguage("typescript", typescript);
  
  return marked.parse(content, {
    renderer: renderer(),
    langPrefix: '',
    highlight: (code, lang) => {
      return highlightjs.highlightAuto(code, [lang]).value;
    }
  });
};