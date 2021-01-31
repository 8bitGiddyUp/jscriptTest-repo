function setMeUp(f) {
  f();
  console.log("setMeUp(): ", this);
}

const setMeUpA = (f) => {
  f();
  console.log("setMeUpA(): ", this);
};

const annoyer = {
  phrases: ["literally", "cray, cray", "i cant even", "totes", "yolo"],
  pickphrase() {
    const { phrases } = this;

    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },

  start() {
    console.log("f1: ", this, this.pickphrase());
    setInterval(function () {
      console.log("f2: ", this, this.pickphrase());
    }, 3000);
  },

  startFF() {
    console.log("1a startFF(): ", this);

    function nestedF() {
      console.log("1b nestedF(): ", this);
    }
    nestedF();
  },

  startFA() {
    console.log("2a startFA(): ", this);

    const nestedA = () => {
      console.log("2b nestedA(): ", this);
    };
    nestedA();
  },

  startAF: () => {
    console.log("3a startAF(): ", this);

    function nestedF() {
      console.log("3b nestedF(): ", this);
    }
    nestedF();
  },

  startAA: () => {
    console.log("4a startAA(): ", this);

    const nestedA = () => {
      console.log("4b nestedA(): ", this);
    };
    nestedA();
  },

  startTestFAF() {
    console.log("5a startTestFA(): ", this);

    setMeUp(() => {
      console.log("5b setMeUp(function()): ", this);
    });
  },

  startTestAAF: () => {
    console.log("6a startTestAA(): ", this);

    setMeUp(() => {
      console.log("6b setMeUp(function()): ", this);
    });
  },

  startTestFAA() {
    console.log("7a startTestFAA(): ", this);

    setMeUpA(() => {
      console.log("7b setMeUpA(function()): ", this);
    });
  },
};

// console.log(annoyer.startNest());
annoyer.startFF(); /* o w */
annoyer.startFA(); /* o o */
annoyer.startAF(); /* w w */
annoyer.startAA(); /* w w */
annoyer.startTestFAF(); /* o o w */
annoyer.startTestAAF(); /* w w w */
annoyer.startTestFAA(); /* o o w */
