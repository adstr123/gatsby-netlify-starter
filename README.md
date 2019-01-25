<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/" width="60" />
  </a>
</p>
<h1 align="center">
  GatsbyJS // Netlify
</h1>

This project is similar to the default [Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) with a few additions that make it easier to use with [Netlify](https://www.netlify.com/) (plus a few extras that are commonly used in modern web dev workflows).

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    # create a new Gatsby site using this starter
    npx gatsby new my-netlify-starter https://github.com/adstr123/gatsby-netlify-starter
    ```

1.  **Start the development site.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-netlify-starter/
    gatsby develop
    ```

1.  **Open the source code in your IDE of choice and start editing. See it reflected immediately in the browser!**

    The site is now running at `http://localhost:8000`!
    
    *Note: a second link `http://localhost:8000/___graphql` provides access to a tool you can use to experiment with querying data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
## How does this starter extend the default one?

1. It adds & configures the [netlify-cms](https://www.netlifycms.org/) as a backend, accessible by accessing `http://localhost:8000/admin`. **You will still need to authorise the Netlify app in your github repo, and configure the repo settings in gatsby-config.js.** Otherwise you will not be authorised to log in as an administrator.

2. It integrates programmatic page generation from markdown (.md) files. It configures this with the previously setup netlify-cms in order to accept admin-submitted content, and create pages from them. At the moment, this content goes to the 'products' folder but this is likely to change in the future as it is generalised away from e-commerce.

3. It configures a few additions, such as enabling SASS and disabling CSS module automatic camelcasing.
    
## 🧐 What's inside?

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

  1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed. Leave the management of this one to npm.
  
  2.  **`/src`**: This directory contains all of the code related to what you will see on the front-end of the site.
  
  3.  **`/admin`**: This is where some static resources are located, such as the code for the admin console ([netlify-cms](https://www.netlifycms.org/).
  
  4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/).
  
  6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) that allow customization/extension of default Gatsby settings affecting the browser.
  
  7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where metadata is specified like the site title and description, which Gatsby plugins are in use, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. This is where programmatic creation of pages from markdown files is configured, for example.
  
  9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/). These allow customization of default Gatsby settings affecting server-side rendering.
  
  10.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  11.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
  
  12.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  13.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 More Info

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

-   **The tutorials are very good e.g. [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **[Documentation](https://www.gatsbyjs.org/docs/) is also excellent.**
