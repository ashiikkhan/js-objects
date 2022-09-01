const student = {
  name: 'Ashikur Rahman',
  dept: 'Social Work',
  id: 2015233009,
  courses: [
    'psychology',
    'biology',
    'social action',
    'sociology',
    'statistics',
  ],
  hasMoney: 5000,
  exam: function () {
    return `${this.name} is participating in ${this.courses[2]} examination.`;
  },
  improve: function (subject) {
    this.exam();
    return `${this.name} is taking improvement exam on ${subject} `;
  },
  treat: function (amount) {
    this.hasMoney = this.hasMoney - amount;
    return this.hasMoney;
  },
};
// console.log(student.exam());
// console.log(student.exam());

console.log(student.improve('sociology'));

console.log(student.treat(2000));
