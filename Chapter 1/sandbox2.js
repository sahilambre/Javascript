// template strings way

const title = 'the blog of 2023';
const author = 'sahil';
const likes = '20';

let result = `the blog ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates 

let html = `
<h1>${title}</h1>
<p>${author}<p>
<span> This blog has ${likes} </span>
`;
console.log(html)