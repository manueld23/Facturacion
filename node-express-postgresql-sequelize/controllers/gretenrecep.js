const GRetenRecep = require('../models').

module.exports = {
  list(req, res) {
    return GRetenRecep
      .findAll({})
      .then((gretenreceps) => res.status(200).send(gretenreceps))
      .catch((error) => { res.status(400).send(error); });
  },