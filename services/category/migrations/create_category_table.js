db = db.getSiblingDB('category_db');

db.createCollection('categories');

db.users.insertMany([
    {
        "slug": "laptop",
        "name": "laptop",
        "description": "laptop",
        "image_path": "",
        "is_active": false,
        "created_by": "bilal",
        "updated_by": "bilal"
    }
]);