const usuario_rol = require('../models').UsuarioRol;
const usuario = require('../models').Usuario;
const rol = require('../models').Rol;

module.exports = {
  list(req, res) {
    return usuario_rol
      .findAll({})
      .then(( usuario_rol ) => res.status(200).send( usuario_rol )).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return usuario_rol.findById(req.params.id)
      .then((usuario_rol) => {
        console.log(usuario_rol);
        if (!usuario_rol) {
          return res.status(404).send({
            message: 'usuario_rol Not Found',
          });
        }
        return res.status(200).send(usuario_rol);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {

    return usuario_rol
      .findAll({
        where: {
          id_usuario_rol: req.params.id
        },
        include: [{
            model: rol
          },
          {
            model: usuario
          },
        ]
      })
      .then((usuario_rol) => {
        console.log(usuario_rol);
        if (!usuario_rol) {
          return res.status(404).send({
            message: 'usuario_rol Not Found',
          });
        }
        return res.status(200).send(usuario_rol);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return usuario_rol.create({
        id_usuario_rol: req.body.id_usuario_rol,
        id_usuario: req.body.id_usuario,
        id_rol: req.body.id_rol
      })
      .then((usuario_rol) => res.status(201).send(usuario_rol))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return usuario_rol
      .findById(req.params.id, {})
      .then(usuario_rol => {
        if (!usuario_rol) {
          return res.status(404).send({
            message: 'usuario_rol Not Found',
          });
        }
        return usuario_rol
          .update({
            id_usuario_rol: req.body.id_usuario_rol || usuario_rol.id_usuario_rol,
            id_usuario: req.body.id_usuario || usuario_rol.id_usuario,
            id_rol: req.body.id_rol || usuario_rol.id_rol,
          })
          .then(() => res.status(200).send(usuario_rol))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return usuario_rol
      .findById(req.params.id)
      .then(usuario_rol => {
        if (!usuario_rol) {
          return res.status(400).send({
            message: 'usuario_rol Not Found',
          });
        }
        return usuario_rol
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },



};
