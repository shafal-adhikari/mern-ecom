const Product = require("../models/productModel");
const User = require("../models/userModel");
const seedData = require("./seed");

const dbSeeder = () => {
  seedData.users.map(async (user) => {
    const newUser = new User(user);
    await newUser.save();
  });
  seedData.products.map(async (product) => {
    const newProduct = new Product(product);
    await newProduct.save();
  });
};

module.exports = dbSeeder;
