# Broken App Issues
 Not using await when making Axios requests:  to ensure the asynchronous requests complete before proceeding,it was necessary to use await . Additionally, response.data should be access  to get the user information from the Axios response.

Not using app.use(express.json()) to parse JSON request bodies. This middleware is more common for handling JSON data in Express.

uncorrect Response Format