const promiseADog = new Promise ((res, rej) => {
  setTimeout(() => {
    const rand = Math.floor(Math.random()*2+1);
    if (rand === 2){
      res(rand);
    }
    else {
      rej(rand);
    }
  }, 3000);
});

promiseADog
.then((rnd) => {
  console.log("i got a dog!!!!", rnd);
})
.catch((rnd) => {
  console.log("I DIDN'T GET A DOG!!!", rnd);
});


const promiseACat = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const rand = Math.floor(Math.random()*2+1);
      if (rand === 2){
        res(rand);
      }
      else {
        rej(rand);
      }
    }, 3000);
  });
};