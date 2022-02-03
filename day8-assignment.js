// 3. Write a “person” class to hold all the details.
class Car {
  constructor(name, city, year, degree,phonenumber) {
    this.name = name;
    this.city = city;
    this.year = year;
    this.degree = degree;
    this.phonenumber = phonenumber;
  }
}

const myCar = new Car("Kalaivani", "Coimbatore" ,2018,"B.SC",9876543210);

console.log(myCar.name + " " + myCar.city);
console.log(myCar.degree + " " + myCar.year);
console.log(myCar.phonenumber);
