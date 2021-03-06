import matter from 'gray-matter';
import fs from 'fs';

export const getPostById = (path: string, name: string) => {
  if(!fs.existsSync(path + name + ".md")) return { content: null, html: null };
  const file = fs.readFileSync(path + name + ".md", "utf-8");
  const content = matter(file);
  
  return content;
};
