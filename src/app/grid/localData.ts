//tslint:disable

export const employeesData = (function () {

	let arr = [];

	for (let i = 1; i <= 500; i++) {
		let isOdd = i % 2 === 0;
		let day = i % 28;
		let month = i % 11;

		let item = 
		{
			"EmployeeID": "56250fa57ab153" + "-" + i,
			"FirstName": "Downs" + " " + i,
			"LastName": "Holcomb" + " " + i,
			"Country": isOdd ? "Italy" : "Canada",
			"Age": i,
			"RegistererDate": new Date(`${month}/${day}/2018`),
			"IsActive": i % 10 === 0 ? null : isOdd
		}

		arr.push(item);
	}

	return arr;

}())


export const employeesData2 = [
{
	"EmployeeID": "56250fa57ab1535722e564a6",
	"FirstName": "Downs",
	"LastName": "Holcomb",
	"Country": "Italy",
	"Age": undefined,
	"RegistererDate": undefined,
	"IsActive": false
},
{
	"EmployeeID": "56250fa5c0fd04f12555d44d",
	"FirstName": null,
	"LastName": "Calderon",
	"Country": "USA",
	"Age": 0,
	"RegistererDate": null,
	"IsActive": false
},
{
	"EmployeeID": "56250fa565a7bcc21f6bd15e",
	"FirstName": "",
	"LastName": "PAce",
	"Country": "Canada",
	"Age": 25,
	"RegistererDate": new Date("08/08/2017"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5d71a83c33f3f6479",
	"FirstName": "Sheppard",
	"LastName": "PAce",
	"Country": "Italy",
	"Age": 49,
	"RegistererDate": new Date("06/28/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa546abbe8c616d37eb",
	"FirstName": "Bettye",
	"LastName": "Trujillo",
	"Country": "Canada",
	"Age": 37,
	"RegistererDate": new Date("04/19/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa535809820f2c44291",
	"FirstName": "Joyce",
	"LastName": "Vaughan",
	"Country": "USA",
	"Age": 48,
	"RegistererDate": new Date("04/24/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5732f6adc0b52ace0",
	"FirstName": "Janine",
	"LastName": "Munoz",
	"Country": "USA",
	"Age": 59,
	"RegistererDate": new Date("02/09/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa540b15dfd507cffb9",
	"FirstName": "Betsy",
	"LastName": "Short",
	"Country": "USA",
	"Age": 26,
	"RegistererDate": new Date("06/04/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5a33146a85fdeda66",
	"FirstName": "Tanisha",
	"LastName": "Harrington",
	"Country": "USA",
	"Age": 31,
	"RegistererDate": new Date("11/25/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa572bea435113bb3be",
	"FirstName": "French",
	"LastName": "Sullivan",
	"Country": "Italy",
	"Age": 37,
	"RegistererDate": new Date("08/16/2015"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa55f17965b7b19e3cf",
	"FirstName": "Gomez",
	"LastName": "Sandoval",
	"Country": "Italy",
	"Age": 24,
	"RegistererDate": new Date("06/19/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5f630e559e163de06",
	"FirstName": "Estes",
	"LastName": "Soto",
	"Country": "Canada",
	"Age": 24,
	"RegistererDate": new Date("03/28/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5c797f025a835abd4",
	"FirstName": "Newman",
	"LastName": "Mathews",
	"Country": "Italy",
	"Age": 60,
	"RegistererDate": new Date("10/09/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5fd5cd14418a9c790",
	"FirstName": "Paul",
	"LastName": "Harper",
	"Country": "USA",
	"Age": 52,
	"RegistererDate": new Date("05/09/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa56a88b994f0925d7c",
	"FirstName": "Sharpe",
	"LastName": "Blair",
	"Country": "Canada",
	"Age": 41,
	"RegistererDate": new Date("12/12/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa53793e85f499fbf8b",
	"FirstName": "Kirk",
	"LastName": "Downs",
	"Country": "USA",
	"Age": 58,
	"RegistererDate": new Date("07/10/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa581c03d4c735c0e8b",
	"FirstName": "Abby",
	"LastName": "Wheeler",
	"Country": "Canada",
	"Age": 42,
	"RegistererDate": new Date("03/28/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa576d7ce7293fc09c6",
	"FirstName": "Walter",
	"LastName": "Roth",
	"Country": "Canada",
	"Age": 36,
	"RegistererDate": new Date("07/24/2015"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5d88119d49b29d8ce",
	"FirstName": "Pratt",
	"LastName": "Mann",
	"Country": "Canada",
	"Age": 40,
	"RegistererDate": new Date("07/03/2015"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa52152c985dfbfcccb",
	"FirstName": "Blackwell",
	"LastName": "Randall",
	"Country": "Italy",
	"Age": 20,
	"RegistererDate": new Date("05/27/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa51a20b01e6ed8f726",
	"FirstName": "Linda",
	"LastName": "Sanchez",
	"Country": "USA",
	"Age": 26,
	"RegistererDate": new Date("07/24/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5330ca7347f162f06",
	"FirstName": "Nieves",
	"LastName": "Hampton",
	"Country": "Italy",
	"Age": 27,
	"RegistererDate": new Date("11/10/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5afae141d6229d5b1",
	"FirstName": "Pruitt",
	"LastName": "Pace",
	"Country": "Canada",
	"Age": 25,
	"RegistererDate": new Date("11/08/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5340a5a2c9124717b",
	"FirstName": "Byrd",
	"LastName": "Bailey",
	"Country": "Canada",
	"Age": 20,
	"RegistererDate": new Date("07/07/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5cf7613339d7e89ef",
	"FirstName": "Hardy",
	"LastName": "Terry",
	"Country": "USA",
	"Age": 45,
	"RegistererDate": new Date("06/01/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa566f393ab8dadba48",
	"FirstName": "Millie",
	"LastName": "Boyd",
	"Country": "USA",
	"Age": 28,
	"RegistererDate": new Date("07/07/2015"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa58eeb7bba0116b2d5",
	"FirstName": "Rosa",
	"LastName": "Mercer",
	"Country": "Canada",
	"Age": 25,
	"RegistererDate": new Date("08/18/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5f85bd1754870f53f",
	"FirstName": "Blair",
	"LastName": "Long",
	"Country": "Canada",
	"Age": 21,
	"RegistererDate": new Date("09/26/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5a0b51fe08c3c767b",
	"FirstName": "Whitfield",
	"LastName": "Cherry",
	"Country": "USA",
	"Age": 38,
	"RegistererDate": new Date("04/25/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5b4e64d93a5742a57",
	"FirstName": "Cathryn",
	"LastName": "Hunt",
	"Country": "USA",
	"Age": 26,
	"RegistererDate": new Date("06/16/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5fad324f0adefae2d",
	"FirstName": "Morris",
	"LastName": "Stout",
	"Country": "Italy",
	"Age": 41,
	"RegistererDate": new Date("03/26/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa59c7408d236d6a804",
	"FirstName": "Vera",
	"LastName": "Richardson",
	"Country": "Canada",
	"Age": 32,
	"RegistererDate": new Date("01/02/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa5d6cd5f712b557a0d",
	"FirstName": "Shelton",
	"LastName": "Henderson",
	"Country": "Canada",
	"Age": 53,
	"RegistererDate": new Date("09/06/2015"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5a11af8868f285db6",
	"FirstName": "Jimmie",
	"LastName": "Cain",
	"Country": "USA",
	"Age": 45,
	"RegistererDate": new Date("06/05/2015"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa53c8439c4e5e7d864",
	"FirstName": "Bryan",
	"LastName": "Bradshaw",
	"Country": "Canada",
	"Age": 24,
	"RegistererDate": new Date("08/02/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa5fc8d4f4859804c7e",
	"FirstName": "Decker",
	"LastName": "Kane",
	"Country": "Canada",
	"Age": 29,
	"RegistererDate": new Date("06/07/2014"),
	"IsActive": false
},
{
	"EmployeeID": "56250fa50158aa6a0fd162f2",
	"FirstName": "Keisha",
	"LastName": "Phelps",
	"Country": "Canada",
	"Age": 34,
	"RegistererDate": new Date("10/11/2014"),
	"IsActive": true
},
{
	"EmployeeID": "56250fa58ca7ea6c3dfe7830",
	"FirstName": "West",
	"LastName": "Frye",
	"Country": "Italy",
	"Age": 40,
	"RegistererDate": new Date("06/25/2014"),
	"IsActive": false
}];
