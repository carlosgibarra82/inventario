const referencias_documento = require('../models').ReferenciasDocumento;
const documento = require('../models').Documento;
const referencia = require('../models').Referencia;

module.exports = {
  list(req, res) {
    return referencias_documento
      .findAll({})
      .then(( referencias_documento ) => res.status(200).send( referencias_documento)).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return referencias_documento.findById(req.params.id)
      .then((referencias_documento) => {
        console.log(referencias_documento);
        if (!referencias_documento) {
          return res.status(404).send({
            message: 'referencias_documento Not Found',
          });
        }
        return res.status(200).send(referencias_documento);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {
    return referencias_documento
      .findAll({
        where: {
          id_productos_documento: req.params.id
        },
        include: [
          {
            model: documento
          },
          {
            model: referencia
          },
        ]
      })
      .then((referencias_documento) => {
        console.log(referencias_documento);
        if (!referencias_documento) {
          return res.status(404).send({
            message: 'referencias_documento Not Found',
          });
        }
        return res.status(200).send(referencias_documento);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return referencias_documento.create({

      id_productos_documento: req.body.id_productos_documento,
      id_documento: req.body.id_documento,
      id_producto: req.body.id_producto,
      cantidad: req.body.cantidad,
      valor: req.body.valor,
      iva: req.body.iva,
      impoconsumo: req.body.impoconsumo

      })
      .then((referencias_documento) => res.status(201).send(referencias_documento))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return referencias_documento
      .findById(req.params.id, {})
      .then(referencias_documento => {
        if (!referencias_documento) {
          return res.status(404).send({
            message: 'referencias_documento Not Found',
          });
        }
        return referencias_documento
          .update({
            id_productos_documento: req.body.id_productos_documento || referencias_documento.id_productos_documento,
            id_documento: req.body.id_documento || referencias_documento.id_documento,
            id_producto: req.body.id_producto || referencias_documento.id_producto,
            cantidad: req.body.cantidad || referencias_documento.cantidad,
            valor: req.body.valor || referencias_documento.valor,
            iva: req.body.iva || referencias_documento.iva,
            impoconsumo: req.body.impoconsumo || referencias_documento.impoconsumo,
          })
          .then(() => res.status(200).send(referencias_documento))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return referencias_documento
      .findById(req.params.id)
      .then(referencias_documento => {
        if (!referencias_documento) {
          return res.status(400).send({
            message: 'referencias_documento Not Found',
          });
        }
        return referencias_documento
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },
};



