let students = ["mary", "anne", "jane"];

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList: () => {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};

group.showList();
