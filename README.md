
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




