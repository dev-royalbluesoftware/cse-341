const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'localhost:3000',
    // host: 'cse-341-project01-bmqt.onrender.com',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFile, doc);