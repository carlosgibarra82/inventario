const permiso = require('../models').Permiso;

module.exports = {
  list(req, res) {
    return permiso
      .findAll({})
      .then((permiso) => res.status(200).send(permiso)).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return permiso.findById(req.params.id).then((permiso) => {
        console.log(permiso);
        if (!permiso) {
          return res.status(404).send({
            message: 'permiso Not Found',
          });
        }
        return res.status(200).send(permiso);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  add(req, res) {
    return permiso.create({
        descripcion: req.body.descripcion,
      })
      .then((permiso) => res.status(201).send(permiso))
      .catch((error) => res.status(400).send(error));
  },


  update(req, res) {
    return permiso
      .findById(req.params.id, {})
      .then(permiso => {
        if (!permiso) {
          return res.status(404).send({
            message: 'permiso Not Found',
          });
        }
        return permiso
          .update({
            descripcion: req.body.descripcion || permiso.descripcion,
          })
          .then(() => res.status(200).send(permiso))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return permiso
      .findById(req.params.id)
      .then(permiso => {
        if (!permiso) {
          return res.status(400).send({
            message: 'permiso Not Found',
          });
        }
        return permiso
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },

};
