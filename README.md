# Menu Management System

## Description

This is a menu management system for a restaurant. It allows you to create, read, update, and delete categories, subcategories, and items.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Installation

Note: The project is hosted on AWS [Click here to visit](http://ec2-65-0-173-55.ap-south-1.compute.amazonaws.com/)
    
[Try this to get all the categories](http://ec2-65-0-173-55.ap-south-1.compute.amazonaws.com/api/v1/categories)

[Try this to get all the subcategories](http://ec2-65-0-173-55.ap-south-1.compute.amazonaws.com/api/v1/subcategories)

[Try this to get all the items](http://ec2-65-0-173-55.ap-south-1.compute.amazonaws.com/api/v1/items)

1. Clone the repository
`
git clone https://github.com/Divyam-Kumar-Pandey/menu-management-backend.git
`
2. Run `npm i` to install the dependencies
3. Create a `.env` file in the root directory and add the following variables:
    - `MONGO_URI` - The URI of the MongoDB database
    - `PORT` - The port number to run the server on
4. Run `nodemon server.js` to start the server

## Usage

- To create a category, send a POST request to `/api/categories` with the following body:
    - `name` - The name of the category
    - `image` - The image of the category
    - `description` - The description of the category
    - `taxApplicable` - Whether tax is applicable for the category
    - `tax` - The tax for the category
    - `taxType` - The type of tax (percentage or fixed)

- To get all categories, send a GET request to `/api/categories`
- To get a category by ID, send a GET request to `/api/categories/:id`
- To update a category, send a PATCH request to `/api/categories/:id` with the updated fields
- To delete a category, send a DELETE request to `/api/categories/:id`

- To create a subcategory, send a POST request to `/api/subcategories` with the following body:
    - `categoryId` - The ID of the category to which the subcategory belongs
    - `name` - The name of the subcategory
    - `image` - The image of the subcategory
    - `description` - The description of the subcategory
    - `taxApplicable` - Whether tax is applicable for the subcategory
    - `tax` - The tax for the subcategory

- To get all subcategories, send a GET request to `/api/subcategories`
- To get a subcategory by ID, send a GET request to `/api/subcategories/:id`
- To get all subcategories by category ID, send a GET request to `/api/subcategories/category/:categoryId`
- To update a subcategory, send a PATCH request to `/api/subcategories/:id` with the updated fields
- To delete a subcategory, send a DELETE request to `/api/subcategories/:id`

- To create an item, send a POST request to `/api/items` with the following body:
    - `name` - The name of the item
    - `image` - The image of the item
    - `description` - The description of the item
    - `price` - The price of the item
    - `subCategoryId` - The ID of the subcategory to which the item belongs

- To get all items, send a GET request to `/api/items`
- To get an item by ID, send a GET request to `/api/items/:id`
- To get all items by subcategory ID, send a GET request to `/api/items/subcategory/:subCategoryId`
- To search items by name, send a GET request to `/api/items/search?name=...`
- To update an item, send a PATCH request to `/api/items/:id` with the updated fields
- To delete an item, send a DELETE request to `/api/items/:id`

- To get all items by category ID, send a GET request to `/api/items/category/:categoryId`  
- To get all items by subcategory ID, send a GET request to `/api/items/subcategory/:subCategoryId`

