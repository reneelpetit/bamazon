// ## Challenge #1: Customer View (Minimum Requirement)
//this is dotenv for storing API keys
const result = require('dotenv').config({ path: "C:/users/renee/bamazon/bamazon/bamazon.env" });
//keys set up
var keys = require("./keys");

var fs = require('fs');
var Database = require('dotenv');
var databasePW = new Database(keys.databasePW);
// 1. Create a MySQL Database called `bamazon`.

// 2. Then create a Table inside of that database called `products`.

// 3. The products table should have each of the following columns:

//    * item_id (unique id for each product)

//    * product_name (Name of product)

//    * department_name

//    * price (cost to customer)

//    * stock_quantity (how much of the product is available in stores)

// 4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: databasePW,
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readDatabase();
})

function readDatabase() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Items: \n" + " | " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " +
                res[i].price + " | " + res[i].stock_quantity + " | ");
        }
        //runInquirer();
    })
}


// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.
// function runInquirer() {
//     inquirer.prompt({
//         name: "searchSong",
//         type: "input",
//         message: "What song are you searching for?",
//     })
//         .then(function (answer) {
//         }
// }
// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

// - - -
