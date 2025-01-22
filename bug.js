```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000000")},{$inc:{field1:1,field2:"string"}});
```