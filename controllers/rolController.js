const rol = require('../models').Rol;

module.exports = {
  list(req, res) {
    return rol
      .findAll({})
      .then((rol) => res.status(200).send(rol)).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return rol.findById(req.params.id).then((rol) => {
        console.log(rol);
        if (!rol) {
          return res.status(404).send({
            message: 'rol Not Found',
          });
        }
        return res.status(200).send(rol);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  add(req, res) {
    return rol.create({
        descripcion: req.body.descripcion,
      })
      .then((rol) => res.status(201).send( rol ))
      .catch((error) => res.status(400).send( error ));
  },


  update(req, res) {
    return rol
      .findById(req.params.id, {})
      .then(rol => {
        if (!rol) {
          return res.status(404).send({
            message: 'rol Not Found',
          });
        }
        return rol
          .update({
            descripcion: req.body.descripcion || rol.descripcion,
          })
          .then(() => res.status(200).send(rol))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return rol
      .findById(req.params.id)
      .then(rol => {
        if (!rol) {
          return res.status(400).send({
            message: 'rol Not Found',
          });
        }
        return rol
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },

};
