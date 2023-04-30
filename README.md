
<h1> ECommerce - API</h1>

### Theme :-
```
An ECommerce site wants to manage their category details and Products present under it. Hence creating a Node.JS application which will
be having different endpoints to manage both categories and products
```

</ol><h2>Tools/Technologies Used</h2>
<hr><ul>
<li>Node.JS</li>
</ul><ul>
<li>Express.JS</li>
</ul><ul>
<li>PostMan</li>
</ul><ul>
<li>MongoDB</li>
</ul>

<hr>



## How To Use :-

####    Step 1 :-  Clone the repo
 
```
git clone https://github.com/SahilMund/Hospital-API.git
```
####    Step 2 :- To install the dependencies

```
npm install
```

#### Step 3 :- To run the application
```
npm start (or) npm run devStart
```

#### Step - 4 :- To check the API response

```
- Use Postman
- Import the Json file present in postman folder to postman 
- Check the API response
```


## API endpoints:
<hr/>

### 1. categories:
- /categories/add
- /categories/fetch-all
- /categories/update/:id
- /categories/delete/:id

### 2. products:
- /products/fetch-all
- /products/add
- /products/update/:id
- /products/delete/id
- /products/category/:id?limit=1&page=1


### Routes :-
1. /doctors/register 

```
- This is a POST request.
- All the required fields such as username,email,password,name should not be empty
- User should not be able to register if he is already a registered user
- Only Unregistered users can register

```
2. /doctors/login

```
- This is a POST request.
- Username and password should not be empty
- Email/Password should match correctly with the details present in the db
- If the user logged in successfully, then we are creating a JWT token for the user to use it for accessing protected routes.

```
3. /patients/register   -> protected route

```
- This is a POST request.
- Only the logged In doctors can access this route to register a new patient as it is a protected route
- Name and Phone fields should not be empty
- Phone number should be a valid number
- If the Patient already exists, then send them the patient info with the message 'already exists'
- Only unregistered patients details can be registered
```

4. /patients/:id/create_report -> protected route

```
- This is a POST request.
- Only the logged In doctors can access this route to create the report as it is a protected route.
- Patient Id is in the Params and from request's body we can get the status data. Also from authorization header token we are fetching the payload to extract the doctor Id to create the report.
- Entered status should not be empty and should be valid i.e. should be either of the status enums
- If both doctor and patient is present , then creating a report and pushing it to the patient's reports array.

```

5. /patients/:id/all_reports → List all the reports of a patient oldest to latest

```
- This is a GET request.
- Patient Id is coming from Url Params
- Patient Id should be a valid Object Id
- Only registered Patients details can be generated, else it will ask to register the user
- If no record found for the registered patient , then it will convey the message that 'Records not found'
- If the records generated successfully, it will send the response with the data.

```

6. /reports/:status → List all the reports of all the patients filtered by a specific status

```
- This is a GET request.
- Status field is coming from Url
- Status should not be empty
- If no record found for the registered patient with the given status , then it will convey the message that 'Records not found'.
- If the records generated successfully, it will send the response with the data.
```





## Folder Structure :-
```


```



walkthrough of folder Structure(MVC pattern) : 
- config:   contains configurations like mongoose
- controller:   contains logic for each routes
- index.js: entry point where server is defined
- middlewares:  contains custom middle ware defined
- models:  all the schema defined here
- routes:   express routes defined here




