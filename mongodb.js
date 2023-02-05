
  
db.Students.updateMany({name: "Suhani"},{$set : {RollNo : 86 , lang: "Java" , age : 55, sex : "F", college : "FET agra college agra"}},{upsert: true})