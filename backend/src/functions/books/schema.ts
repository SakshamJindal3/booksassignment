export const books = {
    type: "object",
    properties: {
        userid: { type: 'string' },
        author: { type: 'string' },
        description: { type: 'string' },
        name: { type: 'string' },
        price: { type: 'string' },



    },
    required: ['author', 'description', 'name', 'price']
};