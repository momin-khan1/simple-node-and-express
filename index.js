const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Im Momin Khan learning node express js')
});

const users = [
    {id:0, name:"Momin Khan", email:"momin@gmail.com", phone:"01789432423"},
    {id:1, name:"arfin", email:"arfin@gmail.com", phone:"01789432423"},
    {id:2, name:"kawser", email:"kawser@gmail.com", phone:"01789432423"},
    {id:3, name:"hridooy datta", email:"datta@gmail.com", phone:"01789432423"},
    {id:4, name:"sazan", email:"sazan@gmail.com", phone:"01789432423"},
    {id:5, name:"azadul", email:"azadul@gmail.com", phone:"01789432423"}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use Query Parameters
    if(search){
        const searchResult = users.filter (user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})

//app post method

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//Display All users or Dynamic Api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


app.listen(port, () => {
    console.log('listing to port', port)
})