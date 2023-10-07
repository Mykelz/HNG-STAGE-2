To create a Person reosurce we send a POST request to the url (http://localhost:7070/api), the body of the request should contain the name of the person we want to create. The user will get a response like this
"{
    "message": "Person created",
    "person": {
        "name": "mykelz obi"
    }
}" after successfully creating the person.

To get the details of a specific person we send a GET request to the url (http://localhost:7070/api/:user_id), the user_id will be the id of the person we are trying to fetch their details. The user gets a response like this after successfully sending this request 
"{
    "name": "mykelz"
}"

To Update the details of an existing person, we send a PUT request to the url (http://localhost:7070/api/:user_id), the user_id will be the id of the person we are trying to fetch their details. 
This request replaces any changes we make to the already existing person and saves those changes to the database, this request also accepts dynamic paramaters i.e users can create other "person" attributes that do not already
exist and our API will handle and create those attributes in our database (p.s The attributes key and value must be strings).

To delete an existing person from the database, we send a DELETE request to the url (http://localhost:7070/api/:user_id), the the user_id will be the id of the person we are trying to delete.
This action permanently deletes this person and all its attributes from our database. The user gets this response after he successfully deletes a user 
"{
    "message": "Deleted Successfully !"
}".

This API strictly follows and adhered to all the rules that was set as a guide to create this projet. and its limitations are within the rules that were set.


