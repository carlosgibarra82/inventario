const rol_permisos = require('../models').RolPermisos;
const permiso = require('../models').Permiso;
const rol = require('../models').Rol;

module.exports = {
  list(req, res) {
    return rol_permisos
      .findAll({})
      .then((rol_permisos) => res.status(200).send(rol_permisos)).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return rol_permisos.findById(req.params.id)
      .then((rol_permisos) => {
        console.log(rol_permisos);
        if (!rol_permisos) {
          return res.status(404).send({
            message: 'rol_permisos Not Found',
          });
        }
        return res.status(200).send(rol_permisos);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {

    return rol_permisos
      .findAll({
        where: {
          id_rol_permisos: req.params.id
        },
        include: [{
            model: rol
          },
          {
            model: permiso
          },
        ]
      })
      .then((rol_permisos) => {
        console.log(rol_permisos);
        if (!rol_permisos) {
          return res.status(404).send({
            message: 'rol_permisos Not Found',
          });
        }
        return res.status(200).send(rol_permisos);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return rol_permisos.create({
        id_rol_permisos: req.body.id_rol_permisos,
        id_rol: req.body.id_rol,
        id_permiso: req.body.id_permiso
      })
      .then((rol_permisos) => res.status(201).send(rol_permisos))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return rol_permisos
      .findById(req.params.id, {})
      .then(rol_permisos => {
        if (!rol_permisos) {
          return res.status(404).send({
            message: 'rol_permisos Not Found',
          });
        }
        return rol_permisos
          .update({
            id_rol_permisos: req.body.id_rol_permisos || rol_permisos.id_rol_permisos,
            id_rol: req.body.id_rol || rol_permisos.id_rol,
            id_permiso: req.body.id_permiso || rol_permisos.id_permiso,
          })
          .then(() => res.status(200).send(rol_permisos))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return rol_permisos
      .findById(req.params.id)
      .then(rol_permisos => {
        if (!rol_permisos) {
          return res.status(400).send({
            message: 'rol_permisos Not Found',
          });
        }
        return rol_permisos
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },


};
