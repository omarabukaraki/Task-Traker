// fetch('https://dummyjson.com/todos')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/todos/1')
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/todos/random')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/todos?limit=3&skip=10')
// .then(res => res.json())
// .then(console.log);


// /* getting todos of user with id 5 */
// fetch('https://dummyjson.com/todos/user/5')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/todos/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       todo: 'Use DummyJSON in the project',
//       completed: false,
//       userId: 5,
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);



// /* updating completed status of todo with id 1 */
// fetch('https://dummyjson.com/todos/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     completed: false,
//   })
// })
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/todos/1', {
//     method: 'DELETE',
//   })
//   .then(res => res.json())
//   .then(console.log);