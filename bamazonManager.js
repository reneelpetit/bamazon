
// * Create a new Node application called `bamazonManager.js`. Running this application will:

require('dotenv').config();

var fs = require('fs');

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: process.env.DATABASE_PW,
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    menuPrompt();
})

// * List a set of menu options:

//   * View Products for Sale

//   * View Low Inventory

//   * Add to Inventory

//   * Add New Product

function menuPrompt() {
    inquirer.prompt([
        {
            name: "menuSelection",
            type: "list",
            message: "Welcome to bamazon! What do you need to do today?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Quit"]
        }
    ]).then(function (answer) {
        switch (answer.menuSelection) {
            case ("View Products for Sale"):
                viewProducts();
                break;
            case ("View Low Inventory"):
                viewLowInventory();
                break;
            case ("Add to Inventory"):
                addInventory();
                break;
            case ("Add New Product"):
                addProduct();
                break;
            case ("Quit"):
                console.log("Thanks, bye!");
                connection.end();
                break;
            default:
                menuPrompt();
        }
    });
}

function viewProducts() {
    console.log("viewProducts");
    menuPrompt();
// * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
}

function viewLowInventory() {
    console.log("viewLowInventory");
    menuPrompt();
// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
}

function addInventory() {
    console.log("add inventory");
    menuPrompt();
// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
}

function addProduct() {
    console.log("addProduct");
    menuPrompt();
// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
}
// - - -

// * If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.