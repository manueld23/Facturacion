const CProdNPro = require('../models').CProdNPro;

module.exports = {
  list(req, res) {
    return CProdNPro
      .findAll({})
      .then((cprodnpros) => res.status(200).send(cprodnpros))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return CProdNPro
      .findById(req.params.id, {})
      .then((cprodnpro) => {
        if (!cprodnpro) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return res.status(200).send(cprodnpro);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return CProdNPro
      .create({
        idCProdNPro: req.body.idCProdNPro,
        CPNPdPro: req.body.CPNPdPro,
        CPNPdUni: req.body.CPNPdUni,
        CPNPserv: req.body.CPNPserv,
        CPNPcUni: req.body.CPNPcUni,
        CPNPdesc: req.body.CPNPdesc,
        CPNPvUni: req.body.CPNPvUni,
        CPNPnIden: req.body.CPNPnIden,
        CPNPunidad: req.body.CPNPunidad,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
      })
      .then((cprodnpro) => res.status(201).send(cprodnpro))
      .catch((error) => res.status(400).send(error));
  },
 
  update(req, res) {
    return CProdNPro
      .findById(req.params.id)
      .then(cprodnpro => {
        if (!cprodnpro) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return cprodnpro
          .update({
            id: req.body.id,
            idCProdNPro: req.body.idCProdNPro,
            CPNPdPro: req.body.CPNPdPro,
            CPNPdUni: req.body.CPNPdUni,
            CPNPserv: req.body.CPNPserv,
            CPNPcUni: req.body.CPNPcUni,
            CPNPdesc: req.body.CPNPdesc,
            CPNPvUni: req.body.CPNPvUni,
            CPNPnIden: req.body.CPNPnIden,
            CPNPunidad: req.body.CPNPunidad,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
          })
          .then(() => res.status(200).send(cprodnpro))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return CProdNPro
      .findById(req.params.id)
      .then(cprodnpro => {
        if (!cprodnpro) {
          return res.status(400).send({
            message: 'Student Not Found',
          });
        }
        return cprodnpro
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}
