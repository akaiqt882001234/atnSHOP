/// ***************** ***************** *****************
/// ***************** ***************** Config DB CONNECTION
const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');

/// ***************** 
//const uri = "mongodb+srv://db03:aGBZRta11CBmt8qL@cluster0-q8a6f.mongodb.net/CloudDB?retryWrites=true&w=majority";
const uri = "mongodb+srv://viet:123@cluster0-pbtyg.mongodb.net/atnshop?retryWrites=true&w=majority";


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
const NameDataBase =  "atnshop"; // "CloudDB";



module.exports = {
    Client : MongoClient,
    Mongosee : mongosee,
    URI : uri,
    DBname : NameDataBase,
};