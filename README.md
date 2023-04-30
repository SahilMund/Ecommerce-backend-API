
<h1> ECommerce - API</h1>

## Description :-
Creating a Node.JS application that allows an eCommerce site to manage categories and the products within them. 
This application will have various endpoints to handle CRUD operations for both categories and products.


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

<br>



## How To Use :-
####    Step 1 :-  Clone the repo
 
```
git clone https://github.com/SahilMund/Ecommerce-backend-API.git
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
Note :- I have added localhost MongoDB URL in the config/momggose file, you can replace it with mongoDB atlas URL as well
<br>

## API endpoints:

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

<br>

## Postman documentation :-
Refer this link to see postman documentation
<a href="https://documenter.getpostman.com/view/12887398/2s93eSZFY7"> Click Me </a>


<br>

## Folder Structure :-
```
.gitignore
README.md
config
   |-- mongoose.js
controllers
   |-- category_controller.js
   |-- index.js
   |-- product_controller.js
index.js
models
   |-- Category.js
   |-- Product.js
package-lock.json
package.json
postman
   |-- E-Commerce.postman_collection.json
routes
   |-- categories.js
   |-- index.js
   |-- products.js

```




