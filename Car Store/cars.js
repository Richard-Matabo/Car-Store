
const car = {
    brand : "Mercedes",
    model : "AMG-E53-Couple-4Matic+",
    color : "Silver",
    regNum : "CAA-215-677",
    prize: 1.630600
};

function Car(brand, model, color, regNum, price) {
  this.brandCar = brand;
  this.modelCar = model;
  this.colorCar = color;
  this.regNumCar = regNum;
  this.price = price;
  this.showMore = function() {
    return this.brandCar + " " + this.modelCar + " " + this.price
  };
}

function myCars(){
  alert(JSON.stringify(car));

}



//let car = new CarDescription("Audi", "A1-13", "Red", "CAA-51312", "R1.100.600");
//let car2 = new CarDescription("Audi", "RS4-Avant", "Red", "CAA-52323", "R1.296.600");
//let car3 = new CarDescription("Mercedes", "AMG-E53-Couple-4Matic+", "Sylver", "CAA-53334", "R1.63.600");
//let car4 = new CarDescription("Lexus", "IS300h-F-Sport", "Grey", "CAA-54345", "R935.200");
//let car5 = new CarDescription("Hyundai-Santa-Fe", "2.2D-4WD-Elite", "Grey", "CAA-55356", "R869.500");
//let car6 = new CarDescription("Honda-Fit", "1.5-Elegance", "Red", "CAA-56367", "R359.900");
//let car7 = new CarDescription("Ford-Ranger", "2.0SiT-Double-Cab-4×4-XLT-FX4", "Red", "CAA-57378", "R704.500");
//let car8 = new CarDescription("Kia-Pegas", "1.4-EX", "White", "CAA-58389", "R236.995");

//console.log(car1, car2, car3, car4, car5, car6, car7, car8);

function car1() {
  document.getElementById("myDialogBox1").showModal();
}
function car2() {
  document.getElementById("myDialogBox2").showModal();
}
function car3() {
  document.getElementById("myDialogBox3").showModal();
}
function car4() {
  document.getElementById("myDialogBox4").showModal();
}
function car5() {
  document.getElementById("myDialogBox5").showModal();
}
function car6() {
  document.getElementById("myDialogBox6").showModal();
}
function car7() {
  document.getElementById("myDialogBox7").showModal();
}
function car8() {
  document.getElementById("myDialogBox8").showModal();
}
