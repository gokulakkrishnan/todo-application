
GET:
http://localhost/3000/api/todo ==> show all ToDo list.
http://localhost/3000/api/todo/id ==> show specific ToDo Details with id.
http://localhost/3000/api/todo/todoName/ToDoName ==> show specific ToDo Details with Name.
http://localhost/3000/api/todo/date/Date ==> show specific ToDo Details in that date.


http://localhost/3000/api/todo/list ==> show all ToDo list.
http://localhost/3000/api/todo ==> show specific ToDo Details with id.

dateRange = 20-nov to 23 nov
id = 
sort = 


POST:
http://localhost/3000/api/todo ==> create new ToDo with 
{
    id:'1',
    ToDoName:'study c',
    createdAt : '12/12/2020'
}

DELETE:
http://localhost/3000/api/todo ==> Delete all ToDo list.
http://localhost/3000/api/todo/id ==> Delete specific ToDo Details with id.
http://localhost/3000/api/todo/todoName/ToDoName ==> Delete specific ToDo Details with Name.


1: 
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

2:
aws configure

3:
aws dynamodb list-tables --endpoint-url http://localhost:8000

 [{"taskName":"buy iphone xr","createdDate":"1606713785567","userId":"6d6fb750-0c16-4fab-889c-d29c7e7fb19b","level":"InCompleted","taskId":"c902a794-dd61-4521-83d0-4330e366a64d","dueDate":"1606893892000"},{"taskName":"buy iphone 11 pro","createdDate":"1606725360275","userId":"6d6fb750-0c16-4fab-889c-d29c7e7fb19b","level":"InCompleted","taskId":"f6735052-ea39-4858-aeb0-ef72b4fcc2ec","dueDate":"1608021315000"}]

 user id : f96bccef-bdf0-47f5-9d7e-19d92cf88a96 and created date : 1606727125201

 [{"taskName":"buy gold","createdDate":"1606727125201","userId":"f96bccef-bdf0-47f5-9d7e-19d92cf88a96","level":"InCompleted","taskId":"7e756b19-21bd-4355-8aaf-03f7256c0e2d","dueDate":"1608280515000"}]

1:
{
	"emailId":"gokul123@gmail.com",
	"password":"password"
}
2:
{
	"emailId":"abc123@gmail.com",
	"password":"abc123abc"
}


1:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzODM3ZWNlOS00ODdjLTQ4NTMtYjYxYi0zOWM0YjU0NjJjNTIiLCJpYXQiOjE2MDY5MjE1MzEsImV4cCI6MTYwNzAwNzkzMX0.Yt2oIryaG8dD81PLX83DkE_87MrIMY10jqEtfN-9hzA

2:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwYWZlM2VjNS0zNzFmLTQ2NWEtYmJmZS1kNDgxMGNmMWQ5NTciLCJpYXQiOjE2MDY5NzkxOTcsImV4cCI6MTYwNzA2NTU5N30.qcx5p3T7Q24d9TTv5u-DvdOQKtHywP633qOU0YrheoE

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwYWZlM2VjNS0zNzFmLTQ2NWEtYmJmZS1kNDgxMGNmMWQ5NTciLCJpYXQiOjE2MDY5ODUwMDIsImV4cCI6MTYwNzA3MTQwMn0.RJbms-o8xC_N6JXzTCWe50_hMArqm9tcvZav0b6QCRU