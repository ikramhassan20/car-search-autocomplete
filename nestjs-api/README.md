This project is used to build for Cars Models Search with prices based on React.js base Autocomplete Search provide the result with quick response.

## Available Scripts

In the project directory, you can run:

### `npm install`

Runs the app in the development mode.<br />

### `npm run dev`

Run the server using node `server.js` and test the functionality of the API using a tool like Postman or curl.<br> 
It should return the car models with their prices as JSON objects <br>
when you make GET requests to `/cars` or `/cars/:name`. For example:

`curl http://localhost:3000/cars`

`[{"_id":"1","name":"Toyota Corolla","price":"$19,500"},{"_id":"2","name":"Honda Civic","price":"$21,000"},{"_id":"3","name":"Ford Mustang","price":"$27,000"}]`

`curl http://localhost:3000/cars/toyota`

`[{"_id":"1","name":"Toyota Corolla","price":"$19,500"}]`