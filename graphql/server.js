var express = require('express');
var graphqlHTTP =require('express-graphql');
var {buildSchema} = require('graphql');

//Initialize a GraphQL schema
var schema = buildSchema(`
 type Query {
    user(id: Int!): Person
    users(gender: String): [Person]
},
type Person {
    id: Int
    name: String
    age: Int
    gender: String
}
type Mutation {
    updateUser(id: Int!, name:String!, age:String):Person
}
`);

var users = [
    {
        id :1,
        name: 'Brian',
        age: 21,
        gender:'M'
    },
    {
        id:2,
        name:'Kim',
        age:22,
        gender:'M'
    }
];

var getUser =function(args) {
    var userID=args.id;
    return users.filter(user =>{
        return user.id == userID;
    })[0];
}
var retrieveUsers = function(args) {
    if(args.gender){
        var gender=args.gender;
        return users.filter(user =>user.gender ===gender);
    } else {
        return users;
    }
}

var updateUser = function ({id,name,age}){
    users.map(user=>{
        if(user.id===id){
            user.name=name;
            user.age=age;
            return user;
        }
    });
    return users.filter(user=>user.id===id)[0];
}

//Root resolver
var root = {
    user:getUser,
    users: retrieveUsers,
    updateUser: updateUser //Include mutation function in root resolver
};

//Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema, // Must be provided
    rootValue: root,
    graphiql: true, // Enable GraphiQL when server endpoint
}));
app.listen(4000, ()=> console.log('Now browse to localhost:4000/graphql'));