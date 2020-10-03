fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoscompleted = json.reduce((ary, todo) => {
        todo.completed
          ? ary
          : ary.push({ userId: todo.userId, title: todo.title })
        return ary;
      }, []);
      console.log(todoscompleted);
    })
    .catch(function(err) {
      console.log(err);
    });