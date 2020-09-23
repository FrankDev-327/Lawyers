'use strict';

require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
const {
   graphqlHTTP
} = require('express-graphql');
const schema = require('./Queries/lawyers_queries');
const _PATH_ = '/api_lawyer';
var app = express();
app.set('port', process.env.PORT);

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.json({
   type: 'application/graphql'
}));

app.use('/graphql', graphqlHTTP({
   schema: schema,
   graphiql: true
}))

const {
   lawyer_route,
   category_route,
   client_route,
   lawyer_photo_route,
   client_photo_route,
   client_case_route,
} = require('./routes/index')

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers',
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,' +
      'Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Allow', 'GET, POST, PUT, DELETE');
   next();
});

app.use(_PATH_, client_route);
app.use(_PATH_, client_case_route);
app.use(_PATH_, lawyer_route);
app.use(_PATH_, category_route);
app.use(_PATH_, client_photo_route);
app.use(_PATH_, lawyer_photo_route);

app.listen(app.get('port'), function () {
   console.log('Connected on ' + app.get('port') + "!")
});

process.on('uncaughtException', err => {
   console.error(err, 'Uncaught Exception thrown in API GATEWAY.');
}).on('unhandledRejection', (reason, p) => {
   console.error(reason, 'Unhandled Rejection at Promise in API GATEWAY.', p);
});