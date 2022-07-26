import matter from 'gray-matter';
import fs from 'fs';

export const getPostsByTag  = (path: string, tag: string) => {
  if(!fs.existsSync(path)) return null;
  
  return fs
    .readdirSync(path)
    .map(fileName => {
      const file = fs.readFileSync(path + fileName, "utf-8");
      const content = matter(file);
      
      return {
        ...content,
        orig: "",
      };
    })
    .filter((post) => post.data.tags.includes(tag))
    .sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
      
      return date1.getTime() - date.getTime();
    });
};