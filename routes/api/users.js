var express = require('express');
var router = express.Router();

const users = (req, res, next) => {
  res.json({
    list: [
      { nome: "Cleytin", idade: 18 },
      { nome: "Jefinho", idade: 13 },
      { nome: "Marcos", idade: 23 },
      { nome: "Cláudia", idade: 33 },
    ],
  });
  JSON.stringify(list);
};

/* GET users listing. */
router.get("/", users);

router.post('api/users', function (req, res) {
  console.log(res)
  }
)

module.exports = router;
