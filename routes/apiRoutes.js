const path = require('path');
const fs = require('fs')
const router = require('express').Router();



router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

router.post('/notes', (req, res) => {
  let db = fs.readFileSync(path.join(__dirname, './db/db.json'), {encoding:'utf8', flag:'r'});
  db = JSON.parse(db);
  res.json(db);

  let userNote = {
    title: req.body.title,
    text: req.body.text,
   
    id: Math.random().toString(),
  };

  db.push(userNote);
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(db));
  res.json(db);

});




module.exports = router;