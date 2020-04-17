const referencia = require('../models').Referencia;
const tercero = require('../models').Tercero;
const calsificacion_referencia = require('../models').ClasificacionReferencia;

module.exports = {
  list(req, res) {
    return referencia
      .findAll({})
      .then((referencia) => res.status(200).send(referencia)).catch((error) => {
        res.status(400).send(error);
      });
  },


  getById(req, res) {
    console.log(req.params.id);
    return referencia.findById(req.params.id)
      .then((referencia) => {
        console.log(referencia);
        if (!referencia) {
          return res.status(404).send({
            message: 'referencia Not Found',
          });
        }
        return res.status(200).send(referencia);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {
    return referencia
      .findAll({
        where: {
          id_referencia: req.params.id
        },
        include: [
          {
            model: tercero
          },
          {
            model: calsificacion_referencia
          },
        ]
      })
      .then((referencia) => {
        console.log(referencia);
        if (!referencia) {
          return res.status(404).send({
            message: 'referencia Not Found',
          });
        }
        return res.status(200).send(referencia);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return referencia.create({
        id_referencia: req.body.id_referencia,
        descripcion: req.body.descripcion,
        id_proveedor: req.body.id_proveedor,
        id_clasificacion_referencia: req.body.id_clasificacion_referencia,
        iva: req.body.iva,
        impoconsumo: req.body.impoconsumo
      })
      .then((referencia) => res.status(201).send(referencia))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return referencia
      .findById(req.params.id, {})
      .then(referencia => {
        if (!referencia) {
          return res.status(404).send({
            message: 'referencia Not Found',
          });
        }
        return referencia
          .update({
            id_referencia: req.body.id_referencia || referencia.id_referencia,
            descripcion: req.body.descripcion || referencia.descripcion,
            id_proveedor: req.body.id_proveedor || referencia.id_proveedor,
            id_clasificacion_referencia: req.body.id_clasificacion_referencia || referencia.id_clasificacion_referencia,
            iva: req.body.iva || referencia.iva,
            impoconsumo: req.body.impoconsumo || referencia.impoconsumo,            
          })
          .then(() => res.status(200).send(referencia))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return referencia
      .findById(req.params.id)
      .then(referencia => {
        if (!referencia) {
          return res.status(400).send({
            message: 'referencia Not Found',
          });
        }
        return referencia
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },

};
