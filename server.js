const express = require('express');
const app = express();

// forma 1 query
//http://localhost:3000/?value1=you
/* app.get("/add", function (req, res) {
    let valueQuery1 = req.query.value1;
    let valueQuery2 = req.query.value2;
    let total = parseInt(valueQuery1)  + parseInt(valueQuery2) 
    res.send(`suma:  ${total} `);
  });
 */

  const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);

  app.get("/", function (req, res) {
    res.send(`Build the next endpoints of our calculator:
     <br></br>
    http://localhost:3000/add/10/2
    <br>
    http://localhost:3000/substract/10/2
    <br>
    http://localhost:3000/multiply/10/2
    <br>
    http://localhost:3000/divide/10/2`);
  });

  app.get("/add/:value1/:value2", function (req, res) {
    let total = parseInt(req.params.value1)  + parseInt(req.params.value2) 
    res.send(`suma:  ${total} `);
  });

  app.get("/substract/:value1/:value2", function (req, res) {
    let total = parseInt(req.params.value1)  - parseInt(req.params.value2) 
    res.send(`substract:  ${total} `);
  });

  app.get("/multiply/:value1/:value2", function (req, res) {
    let total = parseInt(req.params.value1)  * parseInt(req.params.value2) 
    res.send(`multiply:  ${total} `);
  });

  app.get("/divide/:value1/:value2", function (req, res) {
    let total = parseInt(req.params.value1)  / parseInt(req.params.value2) 
    res.send(`divide:  ${total} `);
  });


app.listen(3000, () => console.log("Server is up and running"))