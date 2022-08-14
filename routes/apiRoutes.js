// dependencies 
const path = require('path');
const fs = require('fs')
const router = require('express').Router();



router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

router.post('/notes', (req, res) => {
  let db = fs.readFileSync('/db/db.json', {encoding:'utf8', flag:'r'});
  db = JSON.parse(db);
  res.json(db);
  // creating body for note
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    // creating unique id for each note
    id: uniqid(),
  };
  // pushing created note to be written in the db.json file
  db.push(userNote);
  fs.writeFileSync('/db/db.json', JSON.stringify(db));
  res.json(db);

});




module.exports = router;