const tercero = require('../models').Tercero;
const tipo_documento = require('../models').TipoDocumento;

module.exports = {
  list(req, res) {
    return tercero
      .findAll({})
      .then((tercero) => res.status(200).send(tercero)).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return tercero.findById(req.params.id)
      .then((tercero) => {
        console.log(tercero);
        if (!tercero) {
          return res.status(404).send({
            message: 'tercero Not Found',
          });
        }
        return res.status(200).send(tercero);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {
    return tercero
      .findAll({
        where: {
          id_tercero: req.params.id
        },
        include: [{
          model: tipo_documento
        }, ]
      })
      .then((tercero) => {
        console.log(tercero);
        if (!tercero) {
          return res.status(404).send({
            message: 'tercero Not Found',
          });
        }
        return res.status(200).send(tercero);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return tercero.create({
        id_tercero: req.body.id_tercero,
        documento: req.body.documento,
        nombre_1: req.body.nombre_1,
        nombre_2: req.body.nombre_2,
        apellido_1: req.body.apellido_1,
        apellido_2: req.body.apellido_2,
        razon_social: req.body.razon_social,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        correo: req.body.correo,
        id_tipo_documento: req.body.id_tipo_documento
      })
      .then((tercero) => res.status(201).send(tercero))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return tercero
      .findById(req.params.id, {})
      .then(tercero => {
        if (!tercero) {
          return res.status(404).send({
            message: 'tercero Not Found',
          });
        }
        return tercero
          .update({
            id_tercero: req.body.id_tercero || tercero.id_tercero,
            documento: req.body.documento || tercero.documento,
            nombre_1: req.body.nombre_1 || tercero.nombre_1,
            nombre_2: req.body.nombre_2 || tercero.nombre_2,
            apellido_1: req.body.apellido_1 || tercero.apellido_1,
            apellido_2: req.body.apellido_2 || tercero.apellido_2,
            razon_social: req.body.razon_social || tercero.razon_social,
            telefono: req.body.telefono || tercero.telefono,
            direccion: req.body.direccion || tercero.direccion,
            correo: req.body.correo || tercero.correo,
            id_tipo_documento: req.body.id_tipo_documento || tercero.id_tipo_documento
          })
          .then(() => res.status(200).send(tercero))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tercero
      .findById(req.params.id)
      .then(tercero => {
        if (!tercero) {
          return res.status(400).send({
            message: 'tercero Not Found',
          });
        }
        return tercero
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },



};
