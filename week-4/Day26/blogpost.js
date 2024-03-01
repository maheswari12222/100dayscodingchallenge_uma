// Define the blog post object
let blogPost = {
    title: 'JavaScript ES6 Features',
    author: 'John Doe',
    content: 'ES6, or ECMAScript 2015, introduced several crucial features that revolutionized JavaScript development. Destructuring simplifies data extraction from arrays and objects, enhancing code readability. Spread and rest operators offer flexible ways to handle array elements and function arguments, respectively, streamlining code. Template literals enable dynamic string creation with embedded expressions and multiline support, enhancing readability. Enhanced object literals provide concise syntax for defining object properties and methods, improving code expressiveness. These features, along with others like arrow functions, classes, promises, and modules, have significantly advanced JavaScript programming, making code more efficient, readable, and maintainable. Embracing ES6 features empowers developers to write modern, expressive JavaScript code that meets the demands of contemporary web development paradigms.',
    tags: ['JavaScript', 'ES6', 'Programming']
};

// Destructure the blog post object
let { title, author, content, tags } = blogPost;

// Use the spread operator to combine tags with another array
let additionalTags = ['Web Development', 'Coding'];
tags = [...tags, ...additionalTags];

// Use a template literal to display the blog post
let blogPostTemplate = `
    <h1>${title}</h1>
    <h2>By ${author}</h2>
    <p>${content}</p>
    <ul>
        ${tags.map(tag => `<li>${tag}</li>`).join('')}
    </ul>
`;

document.getElementById('blog-post').innerHTML = blogPostTemplate;