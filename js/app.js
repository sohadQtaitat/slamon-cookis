
'use strict'
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








// 'use strict'

// var hours = ["6am ", "7am ", "8am ", "9am ", "10am ", "11am ", "12pm ", " 1pm ", " 2pm ", "3pm ",
//   "4pm ", " 5pm ", "6pm ", " 7pm "];

// var endrow;

// function CookiesShop(location, minCPH, maxCPH, avgPC) {

//   this.location = location;

//   this.minCPH = minCPH;

//   this.maxCPH = maxCPH;

//   this.avgPC = avgPC;

//   this.thecookiesHour = [];

//   this.totalCookies = 0;

//   this.cookiesSales();


// }


// CookiesShop.prototype.forEachHour = function () {
//   var range = this.maxCPH - this.minCPH;
//   var rand = Math.random() * range + this.minCPH;
//   var totall = Math.ceil(rand);
//   return (totall);
// }


// CookiesShop.prototype.cookiesSales = function () {

//   for (i = 0; i < hours.length; i++) {

//     var cookiesPerHour = this.forEachHour() * this.avgPC;

//     this.totalCookies += cookiesPerHour;

//     this.thecookiesHour.push(Math.ceil(cookiesPerHour));

//   }
// }


// var seattle = new CookiesShop('Seattle', 23, 65, 6.5);
// var dubai = new CookiesShop('Dubai', 11, 38, 3.7);
// var tokyo = new CookiesShop("Tokyo", 3, 24, 1.2);
// var paris = new CookiesShop("Paris", 20, 38, 2.3);
// var lima = new CookiesShop("Lima", 2, 16, 4.6);

// //  table
// var myCookies = document.getElementById('main-content');
// var table = document.createElement('table');
// myCookies.appendChild(table);

// //creat row

// function renderHeaderRow(table) {
//   var tr = document.createElement('tr');
//   table.appendChild(tr);
//   var th = document.createElement('th');
//   tr.appendChild(th);
//   for (var i = 0; i < hours.length; i++) {
//     th = document.createElement('th');
//     tr.appendChild(th);
//     th.textContent = hours[i];
//   }
//   th = document.createElement('th');
//   tr.appendChild(th);
//   th.textContent = 'Location Deile Total';
// }

// CookiesShop.prototype.render = function (table) {
//   var tr = document.createElement('tr');
//   table.appendChild(tr);
//   var td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = this.location;
//   for (var i = 0; i < hours.length; i++) {
//     td = document.createElement('td');
//     tr.appendChild(td);
//     td.textContent = this.thecookiesHour[i];
//   }
//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = Math.ceil(this.totalCookies);
// }



// // footer 
// function renderFooterRow(table) {
//   var tr = document.createElement('tr');
//   endrow = tr;
//   table.appendChild(tr);
//   var td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = 'The Totals';
//   var totallTotal = 0;
//   for (var m = 0; m < hours.length; m++) {
//     td = document.createElement('td');
//     tr.appendChild(td);
//     var sum = 0;
//     for (var a = 0; a < shops.length; a++) {
//       var shop = shops[a];
//       sum += shop.thecookiesHour[m];
//     }

//     td.textContent = sum;
//     totallTotal += sum;
//   }

//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = totallTotal;
// }

// var shops = [seattle, dubai, tokyo, paris, lima];
// renderHeaderRow(table);
// for (var i = 0; i < shops.length; i++) {
//   var shop = shops[i];
//   shop.render(table);
// }
// renderFooterRow(table);

// var form = document.getElementById('addShopForm');
// form.addEventListener('submit', subHandlar);

// function subHandlar(event) {

//   event.preventDefault();

//   var location = event.target.location.value;

//   var min = parseInt(event.target.min.value);
//   var max = parseInt(event.target.max.value);
//   var avgSales = parseFloat(event.target.avgSales.value);
//   var newloc = new CookiesShop(location, min, max, avgSales);
//   console.log(newloc);
//   shops.push(newloc);
//   table.removeChild(endrow);
//   newloc.render(table);
//   renderFooterRow(table);
// }




// // var Seattle = {
// //   minCPH: 23,
// //   maxCPH: 65,
// //   avgPC: 6.3,


// //   forEachHour: function (minCPH, maxCPH) {
// //       var range = maxCPH - minCPH;
// //       var rand = Math.random() * range + minCPH;
// //       var totall = Math.ceil(rand);
// //       return (totall);
// //   },
// //   cookiesSales: function () {
// //       var hours = [
// //           "6am: ",
// //           "7am: ",
// //           "8am: ",
// //           "9am: ",
// //           "10am: ",
// //           "11am: ",
// //           "12pm: ",
// //           " 1pm: ",
// //           " 2pm: ",
// //           "3pm: ",
// //           "4pm: ",
// //           " 5pm: ",
// //           "6pm: ",
// //           " 7pm: ",
// //           "Total: "
// //       ];
// //       var sum = 0;
// //       for (i = 0; i < 14; i++) {
// //           var cookiesPerHour = this.forEachHour(Seattle.minCPH, Seattle.maxCPH) * Seattle.avgPC;
// //           sum = sum + cookiesPerHour;
// //           hours[i] = hours[i] + Math.ceil(cookiesPerHour);
// //       }
// //       hours[14]=hours[14]+ sum;
// //       return hours;
// //   }
// // }
// // Seattle.forEachHour(Seattle.minCPH, Seattle.maxCPH




// // "use strict";

// // var stores = [];
// // var openHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

// // function Store(countryName, minCustomerPerHouer, maxCustomerPerHouer, avargeCookiesPerCust) {


// //   this.countryName = countryName;

// //   this.minCustomerPerHouer = minCustomerPerHouer;

// //   this.maxCustomerPerHouer = maxCustomerPerHouer;

// //   this.avargeCookiesPerCust = avargeCookiesPerCust;

// //   this.cookiesPerHour = [];

// //   this.customerPerHouer = [];

// //   this.dailyTotal = 0;




// //   stores.push(this);
// //   this.addcustomerPerHouer(this.minCustomerPerHouer, this.maxCustomerPerHouer);
// //   this.generatSaleHouer();
// //   this.render();
// //   createTableFooter();
// // }



// // Store.prototype.addcustomerPerHouer = function (min, max) {

// //   for (var i = 0; i < openHours.length; i++) {

// //     var randomcustomerPerHouer = Math.round(Math.random() * (max - min + 1) + min);

// //     this.customerPerHouer.push(randomcustomerPerHouer);

// //     console.log("customers per hour", randomcustomerPerHouer);
// //   }
// // };


// // /********************************************************************************* */



// // Store.prototype.generatSaleHouer = function () {

// //   this.addcustomerPerHouer(this.min, this.max);

// //   for (var i = 0; i < openHours.length; i++) {
// //     var perHour = Math.round(this.customerPerHouer[i] * this.avargeCookiesPerCust);
// //     this.cookiesPerHour.push(perHour);
// //     this.dailyTotal += perHour;
// //   }
// // };



// // /////////////////////////////////creat tabel /////////////////////////////////////////////////

// // Store.prototype.render = function () {
// //   this.generatSaleHouer();

// //   var tbodyEl = document.getElementById("tbl-body");
// //   var trEl = document.createElement("tr");

// //   // tbodyEl.id = this.countryName.toLowerCase().split("").join(_);

// //   var thEl = document.createElement("th");
// //   thEl.textContent = this.countryName;
// //   trEl.appendChild(thEl);




// //   for (var i = 0; i < openHours.length; i++) {
// //     var tdEl = document.createElement("td");
// //     tdEl.textContent = this.cookiesPerHour[i];
// //     trEl.appendChild(tdEl);
// //   }

// //   var totalEl = document.createElement("td");
// //   totalEl.textContent = this.dailyTotal;
// //   trEl.appendChild(totalEl);

// //   tbodyEl.appendChild(trEl);
// // };




// // function createTable() {
// //   var mainEl = document.getElementById(newFunction());
// //   var tblEl = document.createElement("table");
// //   tblEl.id = "sales-table";
// //   mainEl.appendChild(tblEl);
// // }

// // function newFunction() {
// //   return "main-content";
// // }




// // function createTableHeader() {
// //   var tblEl = document.getElementById("sales-table");
// //   var theadEl = document.createElement("thead");
// //   var trEl = document.createElement("tr");
// //   var emptyTh = document.createElement("th");

// //   trEl.appendChild(emptyTh);

// //   for (var i = 0; i < openHours.length; i++) {
// //     var thEl = document.createElement("th");
// //     thEl.textContent = openHours[i];
// //     trEl.appendChild(thEl);
// //   }

// //   var totalEl = document.createElement("th");
// //   totalEl.textContent = "Daily Total";
// //   trEl.appendChild(totalEl);

// //   theadEl.appendChild(trEl);
// //   tblEl.appendChild(theadEl);
// // }

// // function createTableBody() {
// //   var tblEl = document.getElementById("sales-table");
// //   var tbodyEl = document.createElement("tbody");
// //   tbodyEl.id = "tbl-body";
// //   tblEl.appendChild(tbodyEl);
// // }

// // function createTableFooter() {
// //   var tfootElCheck = document.getElementById("s");

// //   if (tfootElCheck) {
// //     tfootElCheck.remove();
// //   }

// //   var tblEl = document.getElementById("sales-table");
// //   var tfootEl = document.createElement("tfoot");
// //   var trEl = document.createElement("tr");

// //   tfootEl.id = "s";

// //   var total2 = document.createElement("th");
// //   total2.textContent = "Total";
// //   trEl.appendChild(total2);

// //   var grandTotal = 0;
// //   for (var i = 0; i < openHours.length; i++) {
// //     var tdEl = document.createElement("td");
// //     var totals = 0;
// //     for (var j = 0; j < stores.length; j++) {
// //       totals += stores[j].cookiesPerHour[i];
// //     }

// //     tdEl.textContent = totals;
// //     trEl.appendChild(tdEl);

// //     grandTotal += totals;
// //   }

// //   var grandTotalEl = document.createElement("td");
// //   grandTotalEl.textContent = grandTotal;
// //   trEl.appendChild(grandTotalEl);

// //   tfootEl.appendChild(trEl);
// //   tblEl.appendChild(tfootEl);
// // }

// // (function run() {
// //   createTable();
// //   createTableHeader();
// //   createTableBody();
// // })();




// // new Store("Seattle", 23, 65, 6.3);
// // new Store("Tokyo", 3, 24, 1.2);
// // new Store("Dubai", 11, 38, 3.7);
// // new Store("Paris", 20, 38, 2.3);
// // new Store("lima", 2, 16, 4.6);
