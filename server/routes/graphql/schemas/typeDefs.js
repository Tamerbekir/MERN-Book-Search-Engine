//typeDefs.js: Define the query and mutation functionality to work with the Mongoose models.
//! Refactoring using typeDefs
const typeDefs = `#graphql
    # Bringing in User id, username, email and password where cannot they be null (!) and the saved book array to the user from the Book typeDef
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]!
    }
    # Bringing Book along with properties. Authors string in an array where Author will bring back Author of book. Description, bookId, and title are required and cannot be null (!).
    type Book {
        authors: [String]
        description: String!
        bookId: ID!
        image: String
        link: String
        title: String!
    }

    type Query {
        # Bringing in an array of users
        users: [User]
        # Bringing in single user by username that is required which then returns a single user
        user(username: String!): User
        ## Brings in the saved books associated with a single user name that is required from the Book array. The user does not need to have a saved book required, so it can be null
        savedBooks(username: String!): [Book]
        # Brings in a single book by using the bookID from the Book object / type. It brings in all of the Book object data (author, image, link etc)
        book(bookId: ID!): Book
    }


    type Mutation {
        ## adding mutation for adding user. Required name, email and password for user object
        addUser(username: String!, email: String!, password: String!): User
        # Adding mutation for added saved book using user's ID from User object, author (array), description, bookId, image, title and link from User object. 
        saveBook(userId: ID!, authors: [String], description: String!, bookId: String!, image: String, link: String, title: String!): User
        # Adding mutation for removing book using user's ID from User object and bookId from User object
        removeBook(userId: ID!, bookId: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`

module.exports = typeDefs
