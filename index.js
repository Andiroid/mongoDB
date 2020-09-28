db.twitter.find({"user.lang":"de"}).explain("executionStats")
db.twitter.sensureIndex({"user.lang":1})