# Hng-stage-2
Stage two of the HNG internship program.

This project is a simple RESt API that performs CRUD operation on a person resource and stores them in a Mongoose database, The API accepts a frontend and can create a person when the frontend sends a POST request
to the url http://localhost:7070/api. The api accesses the body of the POST request, and gets the name from the request and stores it in the People's collection in the database.
The API is also capable of fetching details of a person when the frontend sends a GET request with the id of the user we are trying to fetch as a parameter 
e.g(http://localhost:7070/api/64ff58820265c431a1cb9bac), this request fetches and displays all the details of the person with the id specified in the parameter. This API is also capable of updatinf the details of a specific user,
we do this by sending a PUT request with the url containing the id of the specific person we want to edit their details e.g(http://localhost:7070/api/64ff58820265c431a1cb9bac).
The Api also accepts dynamic parameters, we can add as many new fields as we want to the details of the already existing person, and the API would accept and store this new details plus the changes we made to the database.
Lastly, this API is capable of performing the DELETE operation on a person, i we want to remove a person, we would send a DELETE a request with the id of the person we want to remove asa  parameter in the url.e.g(http://localhost:7070/api/64ff58820265c431a1cb9bac)
This operation completey deletes a person and all its attributes from the database,
