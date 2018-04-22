const http = new EasyHTTP;

const data = {
    name: "John",
    username: "J"
}

//Get Users
http.getUsers('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Post new user
http.postUser('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//PUT user
http.putUser('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//DELETE user
http.deleteUser('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));