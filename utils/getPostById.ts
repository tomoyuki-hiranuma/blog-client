import matter from 'gray-matter';
import fs from 'fs';
import { marked } from 'marked';

export const getPostById = (path: string, name: string) => {
  const file = fs.readFileSync(path + name + ".md", "utf-8");
  const content = matter(file);
  const html = marked.parse(content.content);
  
  return { content, html };
};
