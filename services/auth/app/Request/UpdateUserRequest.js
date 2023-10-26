export default {
    schema: {
        body: {
            type: 'object',
            properties: {
                email: {type: ['string', 'null']},
                gender: {type: ['string', 'null'], enum: ["M", "F"]},
                fullName: {type: ['string', 'null']},
            },
            required: []
        }
    }
}