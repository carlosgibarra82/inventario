const usuario = require('../models').Usuario;
const tercero = require('../models').Tercero;

module.exports = {
  list(req, res) {
    return usuario
      .findAll({})
      .then(( usuario ) => res.status(200).send( usuario )).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return usuario.findById(req.params.id)
      .then((usuario) => {
        console.log(usuario);
        if (!usuario) {
          return res.status(404).send({
            message: 'usuario Not Found',
          });
        }
        return res.status(200).send(usuario);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {
    return usuario
      .findAll({
        where: {
          id_usuario: req.params.id
        },
        include: [{
          model: tercero
        }, ]
      })
      .then((usuario) => {
        console.log(usuario);
        if (!usuario) {
          return res.status(404).send({
            message: 'usuario Not Found',
          });
        }
        return res.status(200).send(usuario);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return usuario.create({
        id_usuario: req.body.id_usuario,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        id_tercero: req.body.id_tercero,
      })
      .then((usuario) => res.status(201).send(usuario))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return usuario
      .findById(req.params.id, {})
      .then(usuario => {
        if (!usuario) {
          return res.status(404).send({
            message: 'usuario Not Found',
          });
        }
        return usuario
          .update({
            id_usuario: req.body.id_usuario || usuario.id_usuario,
            nombre_usuario: req.body.nombre_usuario || usuario.nombre_usuario,
            contrasena: req.body.contrasena || usuario.contrasena,
            id_tercero: req.body.id_tercero || usuario.id_tercero,
          })
          .then(() => res.status(200).send(usuario))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return usuario
      .findById(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(400).send({
            message: 'usuario Not Found',
          });
        }
        return usuario
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },

};
