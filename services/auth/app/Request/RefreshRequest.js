export default {
    schema: {
        body: {
            type: 'object',
            required: ['email', 'password', 'fullName', 'gender'],
            properties: {
                email: {type: 'string'},
                password: {type: 'string'},
                fullName: {type: 'string'},
                gender: {type: 'string'}
            },
        },
    }
}