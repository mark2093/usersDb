const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();
const user4Id = mongoose.Types.ObjectId();

exports.users = [{
    _id: user1Id,
    firstname: "Abhinav",
    lastname: "Dinath",
    address: "Pune",
    country: "India"
}, {
    _id: user2Id,
    firstname: "Yudishtra",
    lastname: "Diggavi",
    address: "Mumbai",
    country: "India"
},
{
    _id: user3Id,
    firstname: "Vanajit",
    lastname: "Shashank",
    address: "Bangalore",
    country: "India"
}, {
    _id: user4Id,
    firstname: "Yudishtra",
    lastname: "Diggavi",
    address: "Hyderabad",
    country: "India"
}]

