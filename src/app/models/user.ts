export interface User {
    name: 'www';
}
// async getData(): Promise<ITodo[]> {
//     return fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10')
//     .then(r => r.json())
//     .then(todos =>
//       todos.map(todo => {
//         return {
//           id: todo.id,
//           status: todo.complete,
//           text: todo.title,
//           title: todo.req ? todo.req : `Untitled ${todo.id}`
//         };
//       }));
//   }
