db = db.getSiblingDB('profile_db');

db.createCollection('profiles');

db.users.insertMany([
    {
        user_id: 1,
        // other details
    }
]);