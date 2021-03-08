const eventTest = {
  name: "birthday party",
  guestlist: ["andrew", "jen", "mike"],
  printGuestList() {
    console.log("1 this: ", this);
    console.log("1 guest list: ", this.name);

    this.guestlist.forEach((guest) => {
      console.log("1 guest: ", guest, " this.name: ", this.name);
    });
  },
};
// eventTest.printGuestList();

function test() {
  const eventTest = {
    name: "birthday party",
    guestlist: ["andrew", "jen", "mike"],
    printGuestList: () => {
      console.log("2 this: ", this);
      console.log("2 guest list: ", this.name);

      // this.guestlist.forEach((guest) => {
      //   console.log("guest: ", guest, " this.name: ", this.name);
      // });
    },
  };
  eventTest.printGuestList();
}

test();
