# Mubble-server

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.6.1.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## API

* POST /search

        body: {
          id,
          filters
        }
      returns a list of users

* POST /users

      create new user

* UPDATE /users/:id

      update user

* GET /users/:id

      returns the specified user

* GET /games

        returns all the games

* GET /games/:id

        returns specified game


## Database

* user:

        {
                id,
                name,
                email,
                country,
                age,
                gender,
                language,
                gameList: [game]
                description,
                image
        }

* conversation:

        {
                id,
                users: [],
                messages:[
                        {
                                username,
                                date,
                                message
                        }
                ]
        }

* games:

        {
                id,
                title,
                filters: [
                        {
                                title,
                                options: []
                        }
                ]
        }



>>>>>>> 6a1021874e3baa561e22eaa5e856025697f1dac4
