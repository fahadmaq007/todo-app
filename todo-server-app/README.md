todo-server-app (server): 
*************************

The server is developed in Spring Boot framework & it uses in-memory NoSQL Mongo like jsondb-core, the data is stored in the classpath directory (todos.json)

Usage: ./run.sh

The server app should be running on http://localhost:8080/todos

To retrieve the documents, use the following URL:
GET: http://localhost:8080/todos
Content-Type: application/json

To add:
PUT: http://localhost:8080/todos
Content-Type: application/json
BODY: 
{
    "task": "Task 5",
    "completed": true
}

To delete:
Content-Type: application/json
DELETE: http://localhost:8080/todos/id_of_the_doc