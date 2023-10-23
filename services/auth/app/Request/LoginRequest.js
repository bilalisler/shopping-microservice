export default {
    schema: {
        body: {
            type: 'object',
            required: ['email','password'],
            properties: {
                email: {type: 'string'},
                password: {type: 'string'},
            },
        },
    }
}