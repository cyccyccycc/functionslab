fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const AllCompleted = json.reduce((ary, todo) => {
      if (todo.completed) {
        ary[todo.userId] === undefined
          ? (ary[todo.userId] = 1)
          : (ary[todo.userId] = ary[todo.userId]+1);
      }
      return ary;
    }, {});
    console.log(AllCompleted);
  })
  .catch(function(err) {
    console.log(err);
  });