const bookList = document.querySelector("#book-list");

console.log("the parent-node is:", bookList.parentNode);
// of
console.log("the parent-element is:", bookList.parentElement);

// en dat kan nog een keer
console.log("the parent-element is:", bookList.parentElement.parentElement);

// nu naar de children
console.log(bookList.childNodes);
// text in output zijn line-breaks
// daarom zeggen we
console.log(bookList.children);
