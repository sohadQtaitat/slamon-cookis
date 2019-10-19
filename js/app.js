

'use strict'



function redirect() {
  window.location.replace("sale.html");
  return false;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var hours = ["6am ", "7am ", "8am ", "9am ", "10am ", "11am ", "12pm ", " 1pm ", " 2pm ", "3pm ",
  "4pm ", " 5pm ", "6pm ", " 7pm "];
  
  
  
  var footerRow;



function SalmonCookies(location, minCustomersPerHour, maxCustomersPerHour, averagePerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averagePerCustomer = averagePerCustomer;
  this.hourCookies = [];
  this.totalCookies = 0;
  this.cookiesPurchased();
}






SalmonCookies.prototype.forEachHour = function () {
  var range = this.maxCustomersPerHour - this.minCustomersPerHour;
  var random1 = Math.random() * range + this.minCustomersPerHour;
  var randomRange = Math.ceil(random1);
  return (randomRange);
}


SalmonCookies.prototype.cookiesPurchased = function () {
  for (i = 0; i < hours.length; i++) {
    var cookiesPerHour = this.forEachHour() * this.averagePerCustomer;
    this.totalCookies += cookiesPerHour;
    this.hourCookies.push(Math.ceil(cookiesPerHour));
  }
}



// my data 
var seattle = new SalmonCookies('Seattle', 23, 65, 6.5);
var dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
var tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2);
var paris = new SalmonCookies("Paris", 20, 38, 2.3);
var lima = new SalmonCookies("Lima", 2, 16, 4.6);
var infoArr = [seattle, dubai, tokyo, paris, lima]




var myCookies = document.getElementById('order');
var table = document.createElement('table');
myCookies.appendChild(table);
//making the header row
function renderHeaderRow(table) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hours[i];
  }
  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Location Daily Total';
}



SalmonCookies.prototype.render = function (table) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.location;
  for (var i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.hourCookies[i];
  }
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = Math.ceil(this.totalCookies);
}





function submitHandlar (event){
  event.preventDefault();
  var location = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);
  var newStand = new SalmonCookies(location, min, max, avg);

infoArr.push(newStand);
table.removeChild(footerRow)
newStand.render(table);
renderFooterRow(table);
}



var box = document.getElementById("add");
box.addEventListener('submit', submitHandlar )



function renderFooterRow(table) {
  var tr = document.createElement('tr');
  footerRow = tr;
  table.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = 'Totals';


  var lastTotal = 0;
  for (var m = 0; m < hours.length; m++) {
    td = document.createElement('td');
    tr.appendChild(td);
    var sum = 0;
    for (var a = 0; a < infoArr.length; a++) {
      var shop = infoArr[a];
      sum += shop.hourCookies[m];
    }
    td.textContent = sum;
    lastTotal += sum;
  }
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = lastTotal;
}
renderHeaderRow(table);
for (var i = 0; i < infoArr.length; i++) {
  var shop = infoArr[i];
  shop.render(table);
}
renderFooterRow(table);

