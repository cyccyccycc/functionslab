fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completednumber = json.reduce((number,todo) => todo.completed ? number+1: number,0  )
     console.log(completednumber)
    })
  
  .catch(function(err) { 
    console.log(err);
  }); 