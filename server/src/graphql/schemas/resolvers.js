// //Bringing auth handling from utils folder, auth.js file
// const { AuthenticationError } = require('../../utils/auth')
// //Bringing in User and Books models
// const { User, Book } = require('../../models')

// //Creating resolvers
// const resolvers = {

//     //Defining Me from typeDefs and authentication (type Auth)
//     Query: {
//         me: async (parent, context) => {
//             if (context.user) {
//                 return User.findOne({ _id: context.user._id }).populate('savedBook')
//             }
//             throw new AuthenticationError('You need to be logged in!')
//         }
//     },
//     //Defining the users from the Query that brings in the Users array and populating saved books
//     users: async () => {
//         return User.find().populate('savedBook')
//     },
//     // Defining the user that shows username from User array and populating saved books
//     user: async (parent, { username }) => {
//         return User.findOne({ username }).populate('savedBook')
//     },
//     // Defining a search in the parameter when a user searches fot a book. This goes off the user name..
//     savedBooks: async (parent, { username }) => {
//         // If a username is active during search, the database will use it, otherwise it will be left an empty object. 
//         const params = username ? { username } : {}
//         // Then sorting them by the time they were created.
//         return Book.find(params).sort({ createdAt: -1 })
//     },
//     // Defining the saved book that shows the book id from the Book array
//     savedBook: async (parent, { bookId }) => {
//         return Book.findOne({ _id: bookId })
//     }
// }

// Mutation: {
//     //Defining the login mutation
// }