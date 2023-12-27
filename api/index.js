const express = require('express') ;
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())     
app.use(express.json())

app.post('/register', (req,res)=>{
    const {username , password} = req.body
    res.json({requestData : {username,password}});
});


app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

