# E-Commerce Back End

## Description

Internet retail, also known as **e-commerce**, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

My task is to build the back end for an e-commerce site. I’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

## Table of Contents 
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Contributing](#contributing)
- [Questions](#questions)
- [Walkthrough Video](#walkthrough-video)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./assets/demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./assets/demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./assets/demo-03.gif)

My walkthrough video will also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Installation

1. Download the zip file and copy it to a directory of your choice or clone to a directory of your choice using your terminal. 
2. Open the file in VS Code or any editor you prefer.
3. Open the terminal in VS Code and make sure you’re in the correct directory.
4. Create a `.gitignore` file and include `node_modules/`, `.env/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
5. Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
6. Ensure inquirer is installed [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Run `npm i` to install dependencies in local project directory.
7. Run `mysql -u root -p` to get into MySQL CLI, enter your MySQL password after that, and run `source db/schema.sql;` to create your database in `schema.sql` file.
8. Exit out from MySQL CLI by typing `quit`.
9. Run `npm run seed` to seed data to your database so that you can test your routes.
10. Run `npm start` to start a server and your app.

## Contributing

Any Contribution is more than welcome!

## Questions

If you have any question, Email me at: yana.mishina.92@gmail.com

Find me on GitHub: [Ymishyna](https://github.com/Ymishyna)

## Walkthrough Video

``````
Disclaimer: The following video provides an illustrative example of how to respond to prompts using the given content. It is intended solely for instructional purposes and to showcase the concept. Users are encouraged to utilize their own responses, thoughts, and ideas when interacting with prompts to achieve personalized and authentic outcomes. The video's content should not be considered prescriptive or definitive, as individual preferences, opinions, and circumstances vary. Viewer discretion is advised, and any actions taken based on the video's content are the responsibility of the user.
``````

![Walkthrough Video Link](https://drive.google.com/file/d/1jazv4GTwpemZ1rM8n_BX1VEamGKU-M-4/view?usp=sharing).



