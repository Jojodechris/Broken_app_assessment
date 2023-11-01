const fs = require('fs');

// const fs = require('fs');

// fs.readFile('urls.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//     process.kill(1)
//   }
//   console.log("DATA...", data)

//   // for (const dat of data) {
//   //   // Access element
//   //   console.log(dat)
//   // }

// })

// // URLs for your GET requests
// const urls = [
//   "http://rithmschool.com",
//   "http://postgresql.com",
//   "http://foozlemcblargh.com",
//   "https://nodejs.org/api/console.html"
// ];

// // An array to store the results of each request
// const results = [];
// // Define a function to make a GET request using the fetch API
// function makeGetRequest() {
//   // const url = [
//   //   // "http://rithmschool.com",
//   //   // "http://postgresql.com",
//   //   // "http://foozlemcblargh.com",
//   //   // "https://nodejs.org/api/console.html"
//   // ];
//   return fetch(urls)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Request failed with status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(error);
//       return null;
//     });
// }

// // Use Promise.all to send all GET requests concurrently
// Promise.all(urls.map(makeGetRequest))
//   .then(data => {
//     // Handle the results here
//     data.forEach((response, index) => { 
//       if (response !== null) {
//         // console.log(response)
//         results.push(response);
//         console.log(`Request ${index + 1} completed successfully`);
//       } else {
//         console.log(`Request ${index + 1} failed`);
//       }
//     });

//     // You can now work with the 'results' array containing the responses.
//     console.log('All requests are complete:', results);
//   })
//   .catch(error => {
//     console.error('Error in one or more requests:', error);
//   });