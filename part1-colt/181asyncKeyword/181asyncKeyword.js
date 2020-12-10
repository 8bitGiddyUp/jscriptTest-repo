function hello(){
  return "hello";
}

/*
  the "world" function is a Promise with "resolved" value = "world"; it can be
  used as:

    world()
    .then((val) => {
      console.log("promise resolved with . operators");
    });
*/
async function world(){
  return "world";
}

world()
.then((val) => {
  console.log("new dot operators with async...", val);
});

/*
  the async way
*/
async function add(x,y) {
  if (typeof x !== 'number' || typeof y !== 'number'){
    throw 'asyn way: x and y must be numbers';
  }
  return x + y;
}

add(3, 'a')
.then((val) => {
  console.log("asyn way: promise resolved with: ", val);
})
.catch((err) => {
  console.log("asyn way: promise rejected with: ", err);
});

/*
  an equivalent way to "async"
*/
function plus(x,y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number'){
      reject('x and y must be numbers');
    }
    resolve(x+ y);
  });
}

plus(2,'k')
.then(val => {
  console.log("result: ", val);
})
.catch(err => {
  console.log("error terminated...", err);
});