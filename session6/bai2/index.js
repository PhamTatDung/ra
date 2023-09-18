//Numbers
const PI = 3.14;
console.log('day la kieu du lieu',typeof(PI));
//Strings
let color = "red";
console.log('day la kieu du lieu',typeof(color));
// Booleans
let x = 1;
let y = 2;
let dung = x<y;
let sai = x>y;
console.log('day la kieu du lieu',typeof(dung));
console.log('day la kieu du lieu',typeof(sai));
//Undefined
let khongXacDinh;
console.log('day la kieu du lieu',typeof(khongXacDinh));
//array
let mang = ["phantu1", "phantu2", "phantu3"];
console.log('day la kieu du lieu',Object.prototype.toString.call(mang));
//object
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log('day la kieu du lieu',Object.prototype.toString.call(person));
//null
let a = null;
if(a == null){
    console.log('day la kieu du lieu null');
}
else{
    console.log('day khong phai la kieu du lieu null');
}
//NaN
let khongPhaiSo = 'anh'/3;
console.log(khongPhaiSo);


