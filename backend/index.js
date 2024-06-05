const express = require('express')
const app = express()
const port = 5000;
app.get('/download',(req,res) =>{
const mongoDB = '/workspaces/codespaces-blank/mernapp/backend/db.js';
res.sendFile(mongoDB);

})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})