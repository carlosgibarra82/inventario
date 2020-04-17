const tipo_documento = require('../models').TipoDocumento;

module.exports = {
  list(req, res) {
    return tipo_documento
      .findAll({})
      .then(( tipo_documento ) => res.status(200).send( tipo_documento )).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return tipo_documento.findById(req.params.id).then((tipo_documento) => {
        console.log(tipo_documento);
        if (!tipo_documento) {
          return res.status(404).send({
            message: 'tipo_documento Not Found',
          });
        }
        return res.status(200).send(tipo_documento);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  add(req, res) {
    return tipo_documento.create({
        descripcion: req.body.descripcion,
      })
      .then((tipo_documento) => res.status(201).send( tipo_documento ))
      .catch((error) => res.status(400).send( error ));
  },


  update(req, res) {
    return tipo_documento
      .findById(req.params.id, {})
      .then(tipo_documento => {
        if (!tipo_documento) {
          return res.status(404).send({
            message: 'tipo_documento Not Found',
          });
        }
        return tipo_documento
          .update({
            descripcion: req.body.descripcion || tipo_documento.descripcion,
          })
          .then(() => res.status(200).send(tipo_documento))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tipo_documento
      .findById(req.params.id)
      .then(tipo_documento => {
        if (!tipo_documento) {
          return res.status(400).send({
            message: 'tipo_documento Not Found',
          });
        }
        return tipo_documento
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },
};
