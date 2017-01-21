var app = require('./index');
var db = app.get('db');

module.exports = {
  getImages: function(req, res) {
    db.run('select * from images join packs on images.packs_id = packs.id', function(err, info) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(info)
    })
  }



}
