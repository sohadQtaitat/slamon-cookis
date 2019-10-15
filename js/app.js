'use strict'

var hours = ["6am ", "7am ", "8am ", "9am ", "10am ", "11am ", "12pm ", " 1pm ", " 2pm ", "3pm ",
 "4pm ", " 5pm ", "6pm ", " 7pm "];

 function cookiesShop(location, minCPH, maxCPH, avgPC) {

 this.location = location;

 this.minCPH = minCPH;

 this.maxCPH = maxCPH;

 this.avgPC = avgPC;

 this.thecookiesHour = [];

 this.totalCookies = 0;
 
 this.cookiesSales();


}



cookiesShop.prototype.forEachHour = function () {
 var range = this.maxCPH - this.minCPH;
 var rand = Math.random() * range + this.minCPH;
 var totall = Math.ceil(rand);
 return (totall);
}


cookiesShop.prototype.cookiesSales = function () {

 for (i = 0; i < hours.length ; i++) {
 
  var cookiesPerHour = this.forEachHour() * this.avgPC;
 
  this.totalCookies += cookiesPerHour;
 
  this.thecookiesHour.push(Math.ceil(cookiesPerHour));
 
}
}


var seattle = new cookiesShop('Seattle',23, 65, 6.5);
var dubai = new cookiesShop('Dubai',11, 38, 3.7);
var tokyo = new cookiesShop("Tokyo", 3, 24, 1.2);
var paris = new cookiesShop("Paris", 20, 38,2.3);
var lima = new cookiesShop("Lima", 2, 16,4.6);


//  table
var myCookies = document.getElementById('main-content');
var table = document.createElement('table');
myCookies.appendChild(table);

//creat row

function renderHeaderRow(table) {
 var tr = document.createElement('tr');
 table.appendChild(tr);
 var th = document.createElement('th');
 tr.appendChild(th);
 for(var i = 0; i < hours.length; i++) {
   th = document.createElement('th');
   tr.appendChild(th);
   th.textContent = hours[i];
 }
 th = document.createElement('th');
 tr.appendChild(th);
 th.textContent = 'Location Deile Total';
}



cookiesShop.prototype.render = function (table) {
 var tr = document.createElement('tr');
 table.appendChild(tr);
 var td = document.createElement('td');
 tr.appendChild(td);
 td.textContent = this.location;
 for (var i = 0; i < hours.length; i++) {
   td = document.createElement('td');
   tr.appendChild(td);
   td.textContent = this.thecookiesHour[i];
 }
 td = document.createElement('td');
 tr.appendChild(td);
 td.textContent = Math.ceil(this.totalCookies);
}



// footer 
function renderFooterRow(table) {
 var tr = document.createElement('tr');
 table.appendChild(tr);
 var td = document.createElement('td');
 tr.appendChild(td);
 td.textContent = 'The Totals';
 var totallTotal = 0;
 for (var hourI = 0; hourI < hours.length; hourI++) {
   td = document.createElement('td');
   tr.appendChild(td);
   var sum = 0;
   for (var shopI = 0; shopI < shops.length; shopI++) {
     var shop = shops[shopI];
     sum += shop.thecookiesHour[hourI];
   }

   td.textContent = sum;
   totallTotal += sum;
 }

 td = document.createElement('td');
 tr.appendChild(td);
 td.textContent = totallTotal;
}

var shops = [seattle, dubai, tokyo, paris, lima];
renderHeaderRow(table);
for (var i = 0; i < shops.length; i++) {
 var shop = shops[i];
 shop.render(table);
}
renderFooterRow(table);




// var Seattle = {
//   minCPH: 23,
//   maxCPH: 65,
//   avgPC: 6.3,


//   forEachHour: function (minCPH, maxCPH) {
//       var range = maxCPH - minCPH;
//       var rand = Math.random() * range + minCPH;
//       var totall = Math.ceil(rand);
//       return (totall);
//   },
//   cookiesSales: function () {
//       var hours = [
//           "6am: ",
//           "7am: ",
//           "8am: ",
//           "9am: ",
//           "10am: ",
//           "11am: ",
//           "12pm: ",
//           " 1pm: ",
//           " 2pm: ",
//           "3pm: ",
//           "4pm: ",
//           " 5pm: ",
//           "6pm: ",
//           " 7pm: ",
//           "Total: "
//       ];
//       var sum = 0;
//       for (i = 0; i < 14; i++) {
//           var cookiesPerHour = this.forEachHour(Seattle.minCPH, Seattle.maxCPH) * Seattle.avgPC;
//           sum = sum + cookiesPerHour;
//           hours[i] = hours[i] + Math.ceil(cookiesPerHour);
//       }
//       hours[14]=hours[14]+ sum;
//       return hours;
//   }
// }
// Seattle.forEachHour(Seattle.minCPH, Seattle.maxCPH




// "use strict";

// var stores = [];
// var openHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

// function Store(countryName, minCustomerPerHouer, maxCustomerPerHouer, avargeCookiesPerCust) {


//   this.countryName = countryName;

//   this.minCustomerPerHouer = minCustomerPerHouer;

//   this.maxCustomerPerHouer = maxCustomerPerHouer;

//   this.avargeCookiesPerCust = avargeCookiesPerCust;

//   this.cookiesPerHour = [];

//   this.customerPerHouer = [];

//   this.dailyTotal = 0;




//   stores.push(this);
//   this.addcustomerPerHouer(this.minCustomerPerHouer, this.maxCustomerPerHouer);
//   this.generatSaleHouer();
//   this.render();
//   createTableFooter();
// }



// Store.prototype.addcustomerPerHouer = function (min, max) {

//   for (var i = 0; i < openHours.length; i++) {

//     var randomcustomerPerHouer = Math.round(Math.random() * (max - min + 1) + min);

//     this.customerPerHouer.push(randomcustomerPerHouer);

//     console.log("customers per hour", randomcustomerPerHouer);
//   }
// };


// /********************************************************************************* */



// Store.prototype.generatSaleHouer = function () {

//   this.addcustomerPerHouer(this.min, this.max);

//   for (var i = 0; i < openHours.length; i++) {
//     var perHour = Math.round(this.customerPerHouer[i] * this.avargeCookiesPerCust);
//     this.cookiesPerHour.push(perHour);
//     this.dailyTotal += perHour;
//   }
// };



// /////////////////////////////////creat tabel /////////////////////////////////////////////////

// Store.prototype.render = function () {
//   this.generatSaleHouer();

//   var tbodyEl = document.getElementById("tbl-body");
//   var trEl = document.createElement("tr");

//   // tbodyEl.id = this.countryName.toLowerCase().split("").join(_);

//   var thEl = document.createElement("th");
//   thEl.textContent = this.countryName;
//   trEl.appendChild(thEl);




//   for (var i = 0; i < openHours.length; i++) {
//     var tdEl = document.createElement("td");
//     tdEl.textContent = this.cookiesPerHour[i];
//     trEl.appendChild(tdEl);
//   }

//   var totalEl = document.createElement("td");
//   totalEl.textContent = this.dailyTotal;
//   trEl.appendChild(totalEl);

//   tbodyEl.appendChild(trEl);
// };




// function createTable() {
//   var mainEl = document.getElementById(newFunction());
//   var tblEl = document.createElement("table");
//   tblEl.id = "sales-table";
//   mainEl.appendChild(tblEl);
// }

// function newFunction() {
//   return "main-content";
// }




// function createTableHeader() {
//   var tblEl = document.getElementById("sales-table");
//   var theadEl = document.createElement("thead");
//   var trEl = document.createElement("tr");
//   var emptyTh = document.createElement("th");

//   trEl.appendChild(emptyTh);

//   for (var i = 0; i < openHours.length; i++) {
//     var thEl = document.createElement("th");
//     thEl.textContent = openHours[i];
//     trEl.appendChild(thEl);
//   }

//   var totalEl = document.createElement("th");
//   totalEl.textContent = "Daily Total";
//   trEl.appendChild(totalEl);

//   theadEl.appendChild(trEl);
//   tblEl.appendChild(theadEl);
// }

// function createTableBody() {
//   var tblEl = document.getElementById("sales-table");
//   var tbodyEl = document.createElement("tbody");
//   tbodyEl.id = "tbl-body";
//   tblEl.appendChild(tbodyEl);
// }

// function createTableFooter() {
//   var tfootElCheck = document.getElementById("s");

//   if (tfootElCheck) {
//     tfootElCheck.remove();
//   }

//   var tblEl = document.getElementById("sales-table");
//   var tfootEl = document.createElement("tfoot");
//   var trEl = document.createElement("tr");

//   tfootEl.id = "s";

//   var total2 = document.createElement("th");
//   total2.textContent = "Total";
//   trEl.appendChild(total2);

//   var grandTotal = 0;
//   for (var i = 0; i < openHours.length; i++) {
//     var tdEl = document.createElement("td");
//     var totals = 0;
//     for (var j = 0; j < stores.length; j++) {
//       totals += stores[j].cookiesPerHour[i];
//     }

//     tdEl.textContent = totals;
//     trEl.appendChild(tdEl);

//     grandTotal += totals;
//   }

//   var grandTotalEl = document.createElement("td");
//   grandTotalEl.textContent = grandTotal;
//   trEl.appendChild(grandTotalEl);

//   tfootEl.appendChild(trEl);
//   tblEl.appendChild(tfootEl);
// }

// (function run() {
//   createTable();
//   createTableHeader();
//   createTableBody();
// })();




// new Store("Seattle", 23, 65, 6.3);
// new Store("Tokyo", 3, 24, 1.2);
// new Store("Dubai", 11, 38, 3.7);
// new Store("Paris", 20, 38, 2.3);
// new Store("lima", 2, 16, 4.6);