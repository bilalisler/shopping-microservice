db = db.getSiblingDB('auth_db');

db.createCollection('users');

db.users.insertMany([
    {
        email: 'test@test.com',
        password: 'PW3',
        fullName: 'Test User',
        gender: 'M'
    },
    {
        email: 'test2@test.com',
        password: 'PW3',
        fullName: 'Test2 User',
        gender: 'M'
    },
    {
        email: 'test3@test.com',
        password: 'PW3',
        fullName: 'Test3 User',
        gender: 'M'
    },
]);