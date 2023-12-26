const express = require('express') ;

port = 4000;

app = express.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
