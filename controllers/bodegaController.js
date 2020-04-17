const bodega = require('../models').Bodega;
const tercero = require('../models').Tercero;

module.exports = {
  list(req, res) {
    return bodega
      .findAll({})
      .then(( bodega ) => res.status(200).send( bodega )).catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    console.log(req.params.id);
    return bodega.findById(req.params.id)
      .then((bodega) => {
        console.log(bodega);
        if (!bodega) {
          return res.status(404).send({
            message: 'bodega Not Found',
          });
        }
        return res.status(200).send(bodega);
      })
      .catch((error) =>
        res.status(400).send(error));
  },

  getDetailById(req, res) {
    return bodega
      .findAll({
        where: {
          id_bodega: req.params.id
        },
        include: [{
          model: tercero
        }, ]
      })
      .then((bodega) => {
        console.log(bodega);
        if (!bodega) {
          return res.status(404).send({
            message: 'bodega Not Found',
          });
        }
        return res.status(200).send(bodega);
      })
      .catch((error) =>
        res.status(500).send(error));
  },

  add(req, res) {
    return bodega.create({
        id_bodega: req.body.id_bodega,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        id_responsable: req.body.id_responsable,
      })
      .then((bodega) => res.status(201).send(bodega))
      .catch((error) => res.status(500).send(error));
  },


  update(req, res) {
    return bodega
      .findById(req.params.id, {})
      .then(bodega => {
        if (!bodega) {
          return res.status(404).send({
            message: 'bodega Not Found',
          });
        }
        return bodega
          .update({
            id_bodega: req.body.id_bodega || bodega.id_bodega,
            descripcion: req.body.descripcion || bodega.descripcion,
            direccion: req.body.direccion || bodega.direccion,
            id_responsable: req.body.id_responsable || bodega.id_responsable,
          })
          .then(() => res.status(200).send(bodega))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return bodega
      .findById(req.params.id)
      .then(bodega => {
        if (!bodega) {
          return res.status(400).send({
            message: 'bodega Not Found',
          });
        }
        return bodega
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },

};
