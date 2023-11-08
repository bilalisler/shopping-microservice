db = db.getSiblingDB('category_db');

db.createCollection('categories_products');

db.users.insertMany([
    {
        "product_id": "0",
        "category_id": "0",
    }
]);