const documento = require('../models').Documento;
const tercero = require('../models').Tercero;
const bodega = require('../models').Bodega;

module.exports = {
  list(req, res) {
    return documento
      .findAll({})
      .then(( documento ) => res.status(200).send( documento )).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return documento.findById(req.params.id)
      .then((documento) => {
        console.log(documento);
        if (!documento) {
          return res.status(404).send({
            message: 'documento Not Found',
          });
        }
        return res.status(200).send(documento);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {
    return documento
      .findAll({
        where: {
          id_documento: req.params.id
        },
        include: [
          {
            model: tercero, as: 'cliente'
          },
          {
            model: bodega
          },
          {
            model: tercero, as: 'vendedor'
          },
        ]
      })
      .then((documento) => {
        console.log(documento);
        if (!documento) {
          return res.status(404).send({
            message: 'documento Not Found',
          });
        }
        return res.status(200).send(documento);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return documento.create({
        id_documento: req.body.id_documento,
        tipo: req.body.tipo,
        numero: req.body.numero,
        fecha: req.body.fecha,
        id_tercero: req.body.id_tercero,
        id_vendedor: req.body.id_vendedor,
        id_bodega: req.body.id_bodega,
        valor_total: req.body.valor_total,
        iva: req.body.iva,
        impoconsumo: req.body.impoconsumo
      })
      .then((documento) => res.status(201).send(documento))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return documento
      .findById(req.params.id, {})
      .then(documento => {
        if (!documento) {
          return res.status(404).send({
            message: 'documento Not Found',
          });
        }
        return documento
          .update({
            id_documento: req.body.id_documento || documento.id_documento,
            tipo: req.body.tipo || documento.tipo,
            numero: req.body.numero || documento.numero,
            fecha: req.body.fecha || documento.fecha,
            id_tercero: req.body.id_tercero || documento.id_tercero,
            id_vendedor: req.body.id_vendedor || documento.id_vendedor,
            id_bodega: req.body.id_bodega || documento.id_bodega,
            valor_total: req.body.valor_total || documento.valor_total,
            iva: req.body.iva || documento.iva,
            impoconsumo: req.body.impoconsumo || documento.impoconsumo,
          })
          .then(() => res.status(200).send(documento))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return documento
      .findById(req.params.id)
      .then(documento => {
        if (!documento) {
          return res.status(400).send({
            message: 'documento Not Found',
          });
        }
        return documento
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },

};
