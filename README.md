[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# News Web Application.

This is a simple implementation of how to News Web Application built using React, Node and newsapi.org.

![Screenshot](screenshot.png)

## Getting Started

These instructions will provide you with a copy of the project that will be launched on your local computer for development and testing.

## Prerequisites

What things you need to install the software.

- Git
- NPM
- https://newsapi.org account and API key
- IDE (or code editor)

## Install

Clone the git repository on your computer

```
$ git clone https://github.com/alavir-ua/web-apinews.git
```

You can also download the entire repository as a zip file and unpack in on your computer if you do not have git

After cloning the application, you need to install its dependencies.

```
$ npm install && npm install --prefix frontend
```

## Set environment keys

When you are done with the installation, rename the .env.example files in your project's root directory to .env and fill them with your local development environment variables.

## Run the application

```
# Run frontend (:3000) & backend (:8080)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

After that, open the browser at http://localhost:3000/ to view the result.

## Links

[Live Demo](https://web-apinews.vercel.app/)
