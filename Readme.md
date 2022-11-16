# Phase 2 - Web2

In this first task of phase 2 you'll create a webapp using NextJS and MongoDB.

Fork this repository and push your code to your fork upon completion. Make a commit after completion of each section.



## 1. Creating a NextJS app

> Pre-requirement - you need to have  [nodejs](https://nodejs.org/en/) installed.

To create a basic nextjs app run:
```bash
npx create-next-app project
cd project
npm run dev
```
Familiarize yourself with the starter app and the file structure.

It is also suggested to take a look at the [NextJS documentation](https://nextjs.org/docs/getting-started) if you haven't worked with it previously.

## 2. Modifying the app

Create a personal profile page to display your name, interest and past experiences. Think of it like a mini curriculum vitae(try not to include any info which you don't want to be public). You can go as wild as you like with the design.

At this point we recommend taking a look at [tailwindcss](https://tailwindcss.com/docs/guides/nextjs) to style your pages. With it you can directly style your website in the React code without the need for normal CSS or different files.
If tailwindcss is not what you are looking for and you prefer using normal CSS we recommend taking a look at the [build in css documentation](https://nextjs.org/docs/basic-features/built-in-css-support) for some additional features Next.JS offers you.
Another option would be to use [styled components](https://styled-components.com/), which is a library that allows you to write your CSS code in the React files and create components with it.

## 3. Setting up MongoDB

Use the official tutorials to setup MongoDB

 - **[Install MongoDB locally](https://www.mongodb.com/docs/manual/installation/#std-label-tutorial-installation)**
 - **[Get Started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/)**
 - **[Connect your NextJS App with MongoDB](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)**

Another option would be to directly host your MongoDB using MongoDB atlas, which you can use for free for hobby/educational products (the limits will be enough for this project): https://www.mongodb.com/cloud/atlas/register

Use the following [guide](https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c)[section 1-4] to connect your Next app to MongoDB
Mongoose handles data associations, does schema validation, and is used to translate between objects in code and their representation in MongoDB.

## 4. Exploring APIs

See the following [doc](https://nextjs.org/docs/api-routes/introduction) to know how APIs are structured in NextJS

As a first step convert the data in your personal profile page to a JSON format.

Example:

    {
	    "name": “Joe”,
	    "interests": ["coding”, “working out”],
	    ...
    }
Create a API route say `/api/profile_data` which send this data to the frontend.

Modify the frontend created in #2 to use the API data to display the page.
You can use [axios](https://github.com/axios/axios) to fetch the data from the API.

## 5. Sending data to the DB

Firstly create a schema to represent the data which we will be storing in the data. You will be storing the data sent by the `/api/profile_data` API in the DB.

Create a form in the frontend to modify/add data to the db. This will involve creation of new APIs to pass the data from the frontend to the backend and then to the DB.

Now modify the API created in #4 to use the data from the DB.


## 6. Restructure the fetching of the API route

Currently we directly fetch the API data from our API route, but NextJS offers a variety of ways to fetch your data. Take a look at the [documentation](https://nextjs.org/docs/basic-features/data-fetching/overview) to get an overview.
All these ways are used to fetch data but you can't set data with them. Decide for **one** and replace your current Step 4 code to use one of them and explain why you decided to take this option in a comment or .md file.



