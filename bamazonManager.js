
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
    console.log("You've selected view all products");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Items: \n" + " | " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " +
                res[i].price + " | " + res[i].stock_quantity + " | ");
        }
        menuPrompt();
    });  
// * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
}

function viewLowInventory() {
    console.log("You've selected view all low inventory");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < 5) {
            console.log("Items: \n" + " | " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " +
                res[i].price + " | " + res[i].stock_quantity + " | ");
            }
        }
        menuPrompt();
    }); 
// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
}

function addInventory() {
    console.log("You've selected add to inventory");
    inquirer.prompt([
        {
            name: "itemID",
            type: "message",
            message: "Type the ID of the item you wish to select: "
        },
        {
            name: "itemQuantity",
            type: "message",
            message: "Type many you want to add to the inventory: "
        }
    ])
        .then(function (answer) {
            addItemInventory(answer.itemID, answer.itemQuantity);
        })
// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
}

function addItemInventory(id, quantity) {
    connection.query ("SELECT * FROM products WHERE ?", {
            item_id: id
        }, function (err, res) {
            if (err) throw err;
            var newInventoryAmount = res[0].stock_quantity + parseInt(quantity, 10);
            updateInventoryAmount(res[0].item_id, newInventoryAmount);
        })
}

function updateInventoryAmount(id, amount) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: amount
            },
            {
                item_id: id
            }
        ], function (err, res) {
            if (err) throw err;
            console.log("Inventory updated. New quantity: " + amount);
            menuPrompt();
        })
}

function addProduct() {
    console.log("addProduct");
    menuPrompt();
// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
}
// - - -

// * If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.