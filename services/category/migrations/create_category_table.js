db = db.getSiblingDB('category_db');

db.createCollection('categories');

db.users.insertMany([
    {
        test: 1,
        // other details
    }
]);