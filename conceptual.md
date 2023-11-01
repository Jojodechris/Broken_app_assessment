### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript
using promises,async/await and callbacks

- What is a Promise?
A promise is a response of an asynchronous code  that helps us to know the success or failure in the app.

- What are the differences between an async function and a regular function?
An async function can contain await keyword which allows it to pause its execution until the returned value from the call is available. It also returns a promise object.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment for executing JavaScript code on servers while Express.js is a web application framework for Node.js. It provides a way for developers to run JavaScript on their server side applications

- What is the error-first callback pattern?

- What is middleware?
it's a a way to handle trouble, error in an application

- What does the `next` function do?
The next function allows you to pass control from one middleware function to another

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
  
}
```



async function getUsers() {
  try {
    const userPromises = [
      $.getJSON('https://api.github.com/users/elie'),
      $.getJSON('https://api.github.com/users/joelburton'),
      $.getJSON('https://api.github.com/users/mmmaaatttttt')
    ];

    const [elie, joel, matt] = await Promise.all(userPromises);

    return [elie, joel, matt];
  } catch (error) {
    throw error; // Handle or propagate the error appropriately
  }
}

