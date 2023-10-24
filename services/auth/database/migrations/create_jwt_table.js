db = db.getSiblingDB('auth_db');

db.createCollection('access_tokens');

db.jwt.insertMany([
    {
        org: 'helpdev2',
        filter: 'EVENT_A',
        addrs: 'http://rest_client_1:8080/wh'
    },
    {
        org: 'helpdev2',
        filter: 'EVENT_B',
        addrs: 'http://rest_client_2:8081/wh'
    },
    {
        org: 'github2',
        filter: 'EVENT_C',
        addrs: 'http://rest_client_3:8082/wh'
    }
]);