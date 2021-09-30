
export const range = (start, stop, step=1) => 
Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));

export const truncate = (what, length=100) => 
  what !== null && what !== undefined 
  	&& (what.length < length) ? what : what.substring(0, length) + '..';

export const changeDocumentTitle = title => window.document.title = title;
