db = db.getSiblingDB('comment_db');

db.createCollection('comments');

db.users.insertMany([
    {
        "product_id": "laptop",
        "user_id": "laptop",
        "comment": "laptop"
    }
]);