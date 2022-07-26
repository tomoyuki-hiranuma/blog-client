import { Post } from "../types/type";

export const sortData = (contents: Post[], order: string) => {
  switch(order) {
  case 'asc':
    return contents.slice().sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
        
      return date1.getTime() - date.getTime();
    });
  case 'desc':
    return contents.slice().sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
        
      return - (date1.getTime() - date.getTime());
    });
  default:
    return contents;
  }
};
