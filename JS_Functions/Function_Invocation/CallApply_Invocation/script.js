var speak = function(what) {
  console.log(what);
  console.log(this.love);
}

// Using apply
var saySomething = {normal: "meow", love: "purr"}
speak.apply(saySomething, ['meouff']);

/* Using call
 var saySomething = {normal: "meow", love: "purr"}
 speak.call(saySomething, saySomething.normal);*/
