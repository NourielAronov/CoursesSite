import express from "express"
import request from "request"
const cors = require("cors")
// const bodyParser = require("body-parser")
// const { User, Blog, Tag } = require("./dbSampleConnection2/sequelize")

const App = express()
const router = express.Router()
const port = 4000

App.use(cors())

// App.use(bodyParser.json)
// // create a user
// App.post('/api/users', (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user))
// })

// // get all users
// App.get('/api/users', (req, res) => {
//     User.findAll().then(users => res.json(users))
// })

// // create a blog post
// App.post('/api/blogs', (req, res) => {
//     const body = req.body
//     // either find a tag with name or create a new one
//     const tags = body.tags.map(tag => Tag.findOrCreate({ where: { name: tag.name }, defaults: { name: tag.name }})
//                                          .spread((tag, created) => tag))
//     User.findById(body.userId)
//         .then(() => Blog.create(body))
//         .then(blog => Promise.all(tags).then(storedTags => blog.addTags(storedTags)).then(() => blog))
//         .then(blog => Blog.findOne({ where: {id: blog.id}, include: [User, Tag]}))
//         .then(blogWithAssociations => res.json(blogWithAssociations))
//         .catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.`}))
// })

// // find blogs belonging to one user or all blogs
// App.get('/api/blogs/:userId?', (req, res) => {
//     let query;
//     if(req.params.userId) {
//         query = Blog.findAll({ include: [
//             { model: User, where: { id: req.params.userId } },
//             { model: Tag }
//         ]})
//     } else {
//         query = Blog.findAll({ include: [Tag, User]})
//     }
//     return query.then(blogs => res.json(blogs))
// })

// // find blogs by tag
// App.get('/api/blogs/:tag/tag', (req, res) => {
//     Blog.findAll({
//         include: [
//             { model: Tag, where: { name: req.params.tag } }
//         ]
//     })
//     .then(blogs => res.json(blogs))
// })

App.get("/", (req, res) => {
  request("https://api.mocki.io/v1/07bc5d06", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
})

App.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})
