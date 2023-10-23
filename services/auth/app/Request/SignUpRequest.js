export default {
    schema: {
        body: {
            type: 'object',
            required: ['animal'],
            properties: {
                animal: {type: 'string'},
            },
        },
    }
}