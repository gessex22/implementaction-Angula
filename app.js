const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'))

// app.get('/', (req,resp)=>{

//     resp.sendFile(__dirname+ '/public/generic.html')
// })

app.listen(port , ()=>{

    console.log('ServeS online en el puerto ' + port)
})