var bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('array of bookshelf:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

console.log('JSON bookshelf:', JSON.stringify(bookshelf));
console.log('typeof JSON bookshelf:', typeof JSON.stringify(bookshelf));

var string = '{ "id": "1066737", "name": "paul" }';
console.log('string:', string);
console.log('typeof string:', typeof string);

console.log('JSON.parse(string):', JSON.parse(string));
console.log('typeof JSON.parse(string):', typeof JSON.parse(string));
