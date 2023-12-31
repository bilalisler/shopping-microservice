db = db.getSiblingDB('cart_db');

db.createCollection('carts');

db.users.insertMany([
    {
        user_id: 1,
        expired: false,
        order_id: "",
        products: [{
            product_id: 1,
            quantity: 2
        }]
    }
]);