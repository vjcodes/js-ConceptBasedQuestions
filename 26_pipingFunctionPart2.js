const pipe = (...args) => {
  return function (value) {
    args.forEach((arg) => {
      value = arg(value);
    });

    return value;
  };
};



const val = { salary: 10000 };
const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const result = pipe(getSalary, addBonus, deductTax)(val);
console.log(result)