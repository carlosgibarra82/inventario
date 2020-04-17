const clasificacion_referencia = require('../models').ClasificacionReferencia;

module.exports = {
  list(req, res) {
    return clasificacion_referencia
      .findAll({})
      .then(( clasificacion_referencia ) => res.status(200).send( clasificacion_referencia )).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return clasificacion_referencia.findById(req.params.id).then((clasificacion_referencia) => {
        console.log(clasificacion_referencia);
        if (!clasificacion_referencia) {
          return res.status(404).send({
            message: 'clasificacion_referencia Not Found',
          });
        }
        return res.status(200).send(clasificacion_referencia);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  add(req, res) {
    return clasificacion_referencia.create({
        descripcion: req.body.descripcion,
      })
      .then((clasificacion_referencia) => res.status(201).send( clasificacion_referencia ))
      .catch((error) => res.status(400).send( error ));
  },


  update(req, res) {
    return clasificacion_referencia
      .findById(req.params.id, {})
      .then(clasificacion_referencia => {
        if (!clasificacion_referencia) {
          return res.status(404).send({
            message: 'clasificacion_referencia Not Found',
          });
        }
        return clasificacion_referencia
          .update({
            descripcion: req.body.descripcion || clasificacion_referencia.descripcion,
          })
          .then(() => res.status(200).send(clasificacion_referencia))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return clasificacion_referencia
      .findById(req.params.id)
      .then(clasificacion_referencia => {
        if (!clasificacion_referencia) {
          return res.status(400).send({
            message: 'clasificacion_referencia Not Found',
          });
        }
        return clasificacion_referencia
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },
};
