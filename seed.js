// Run with: npm run seed   (wipes the products collection and inserts 12 sample products)
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Wireless Mouse', sku: 'ELEC-MS-101', category: 'Electronics', price: 799, quantity: 25, reorderLevel: 10, supplier: 'Logitech India' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-102', category: 'Electronics', price: 2499, quantity: 8, reorderLevel: 10, supplier: 'boAt' },
  { name: 'Laptop 15 inch', sku: 'ELEC-LP-103', category: 'Electronics', price: 55000, quantity: 5, reorderLevel: 3, supplier: 'Dell India' },
  { name: 'USB-C Charger', sku: 'ELEC-CH-104', category: 'Electronics', price: 1299, quantity: 58, reorderLevel: 15, supplier: 'Anker' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-201', category: 'Apparel', price: 499, quantity: 50, reorderLevel: 20, supplier: 'Allen Solly' },
  { name: 'Denim Jacket', sku: 'APRL-JK-202', category: 'Apparel', price: 2299, quantity: 28, reorderLevel: 10, supplier: 'Levis' },
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-813', category: 'Furniture', price: 5499, quantity: 3, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'A4 Notebook Pack of 5', sku: 'STNY-NB-711', category: 'Stationery', price: 250, quantity: 70, reorderLevel: 25, supplier: 'Classmate' },
  { name: 'Ball Pen Box of 50', sku: 'STNY-PN-712', category: 'Stationery', price: 180, quantity: 12, reorderLevel: 20, supplier: 'Reynolds' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-301', category: 'Grocery', price: 650, quantity: 40, reorderLevel: 15, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-302', category: 'Grocery', price: 899, quantity: 30, reorderLevel: 10, supplier: 'Figaro' },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);
  } catch (err) {
    console.error('Seeding failed:', err.message);
  } finally {
    await mongoose.disconnect();
  }
})();
