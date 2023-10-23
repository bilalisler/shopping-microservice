db = db.getSiblingDB('auth_db');

db.createCollection('user');


db.user.insertMany([
    {
        email: 'test@test.com',
        password: 'PW',
    },
]);