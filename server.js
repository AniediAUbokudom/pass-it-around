const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("99 Bottles of beer on the wall")
});

app.get("/:numberOfBottles?", function( req, res ){
    const numberOfBottles = req.params.numberOfBottles || 99;
    const next = numberOfBottles - 1;
    if (numberOfBottles > 1){
      res.send(numberOfBottles + " bottles of beer on the wall <a href='/" + next + "'>Take one down pass it around");
    }
    else{
      res.send("1 bottle of beer on the wall <a href='/'>Start Over</a>");
    }
  });
  









app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
