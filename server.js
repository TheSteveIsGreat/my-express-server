const express = require("express")
const app = express()

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>")
})

app.get("/contact", function(req, res) {
  res.send("Contact me at: ")
})

app.get("/about", function(req, res) {
  res.send("About me: I like coding!")
})

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Food</li><li>Cars</li><li>Code</li></ul>")
})

app.get("/blah", function(req, res) {
  res.send("blah blah blah")
})

app.listen(3000, function(){
  console.log('Server started on port 3000')
})

