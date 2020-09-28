/*
use <database name>

show dbs
show collections
*/


/* ============================================================
	SELECT START
============================================================ */

// SELECT *
db.customers.find()

// SELECT * pretty format
db.customers.find().pretty()

// SELECT * without _id
db.customers.find({}, {_id:0})

// SELECT where condition is met
db.customers.find({"address.city":"Vienna"})

// SELECT where like
db.customers.find({Titel:/Highway/},{_id:0})
/* ============================================================
	SELECT END
============================================================ */


/* ============================================================
	INSERT START
============================================================ */

// INSERT
db.customers.insert({
    "first_name":"Max",
    "last_name":"Mustermann",
    "memberships":["mem1", "mem2"],
    "address":{
        "street":"Haupstrasse",
        "city":"Vienna",
        "PLZ":"1010"
    },
    "contacts":[
        {"name":"John", "status":"friend"},
        {"name":"James", "status":"friend"}
    ]
})

/* ============================================================
	INSERT END
============================================================ */


/* ============================================================
	UPDATE START
============================================================ */

// UPDATE single field, even if it doesn't exist
db.customers.update(
    {"first_name": "John"},
    {$set:{"last_name":"DoeDoe"}}
)

// UPDATE by ID
db.customers.update(
    {"_id": ObjectId("5e64971ee3a0472f0e6e74f4")},
    {$set:{"last_name":"DoeDoe"}}
)

/* ============================================================
	UPDATE END
============================================================ */


/* ============================================================
	DELETE START
============================================================ */

// DELETE all documents from a collection
db.customers.remove( { } )


// DELETE where condition
db.customers.remove({"first_name":"John"})

// DELETE OPERATOR
db.textsuche.remove({"user.lang":{$ne:"en"}})

/* ============================================================
	DELETE END
============================================================ */


// COUNT * Documents in a collection
db.customers.count()

// COUNT where condition
db.customers.count({"first_name":"John"})



/* ============================================================
	AGGREGATE START
============================================================ */

db.purchase_orders.aggregate(
    [
        {$match:{}},
        {$group: {_id: $customer_name, total:{$sum: "$total"}}},
        {$sort: {total: -1}} // -1 -> DESC
    ]
)

/* ============================================================
	AGGREGATE END
============================================================ */






// IMPORT BSON

// mongorestore -d <db name> -c <collection name> /data/db/bin/tweets.bson