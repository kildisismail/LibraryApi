<h2>To run application</h2>
navigate to root of the project and run commands listed below
    <li>docker compose build 
    <li>docker compose up

application will be available on localhost:3000


You can test the app following endpoints 
<li><b>Get all books</b>
    GET http://localhost:3000/book 
<li><b>Create Book</b>
    POST http://localhost:3000/book 
<li><b>Get Book By Id</b>
    GET http://localhost:3000/book/{bookId}
<li><b>Update Book</b>
    PUT http://localhost:3000/book/{bookId}
<li><b>Delete Book</b>
    DELETE http://localhost:3000/book/{bookId}

<br>

<h2>Also you can import postman request json to test</h2>
<br>

{
	"info": {
		"_postman_id": "23bf9286-bfc0-4645-abc2-f41576a327d9",
		"name": "New Collection",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Get all books",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/book",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"book"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create book",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\": \"Suç ve Ceza\",\r\n    \"author\": {\r\n        \"name\" : \"Dostoyevski\",\r\n        \"country\" : \"Rusya\",\r\n        \"birtdate\" : \"1821-10-11\"\r\n    },\r\n    \"price\" : \"100\",\r\n    \"isbn\": \"afwfwfw-111www\",\r\n    \"language\" : \"Turkce\",\r\n    \"numberOfPages\": 700\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/book",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"book"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get book by Id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/book/62acb98c584f91ece1570927",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"book",
						"62acb98c584f91ece1570927"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update book by Id",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\": \"İnsancıklar\",\r\n    \"author\": {\r\n        \"name\" : \"Dostoyevski\",\r\n        \"country\" : \"Rusya\",\r\n        \"birtdate\" : \"1821-10-11\"\r\n    },\r\n    \"price\" : \"100\",\r\n    \"isbn\": \"afwfwfw-111www\",\r\n    \"language\" : \"Turkce\",\r\n    \"numberOfPages\": 700\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/book/62acb98c584f91ece1570927",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"book",
						"62acb98c584f91ece1570927"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete book by Id",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/book/62acb98c584f91ece1570925",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"book",
						"62acb98c584f91ece1570925"
					]
				}
			},
			"response": []
		}
	]
}
