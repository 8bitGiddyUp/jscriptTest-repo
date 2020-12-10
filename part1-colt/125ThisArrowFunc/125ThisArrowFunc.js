const annoyer = {
  phrases: ['literally', 'cray, cray', 'i cannot even', 'totel', 'yolo',
    'cant stop wont stop'],

  pickPhrase() {
    console.log(this);
    const {phrases} = this;
    console.log(phrases);
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },

  start() {
    console.log(this.pickPhrase());

    this.timerId = setInterval(() => {
      console.log('one more time');
      /*
        "this" refers to the "window" object because "this" is in the
        "setInterval" function which is a part of the "window" object
      */
      /*
        to remedy "this" pointing to a wrong object, use an arrow function;
        i.e. make the anonymous function into an arrorw function parameter
      */
      console.log(this);
      console.log(this.pickPhrase());
    }, 3000);
  },

  stop() {
    clearInterval(this.timerId);
    console.log('over');
  }
};


// annoyer.pickPhrase();

/*
let pick = annoyer.pickPhrase;
pick();

  pick() fails because pick is a reference to the method of annoyer
  object; once a reference is made to an object's method, it behaves as a
  normal function where "this" refers to the WINDOW object instead of the
  the "annoyer" object.
*/
 annoyer.start();