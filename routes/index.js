var express = require('express');
var router = express.Router();

const rolController = require('../controllers').rolController;
const permisoController = require('../controllers').permisoController;
const tipo_documentoController = require('../controllers').tipo_documentoController;
const rol_permisosController = require('../controllers').rol_permisosController;
const terceroController = require('../controllers').terceroController;
const usuarioController = require('../controllers').usuarioController;
const usuario_rolController = require('../controllers').usuario_rolController;
const bodegaController = require('../controllers').bodegaController;
const clasificacion_referenciaController = require('../controllers').clasificacion_referenciaController;
const referenciaController = require('../controllers').referenciaController;
const documentoController = require('../controllers').documentoController;
const referencias_documentoController = require('../controllers').referencias_documentoController;

// RUTAS ROL
router.get('/api/rol', rolController.list);
router.get('/api/rol/:id', rolController.getById);
router.post('/api/rol', rolController.add);
router.put('/api/rol/:id', rolController.update);
router.delete('/api/rol/:id', rolController.delete);

// RUTAS PERMISOS
router.get('/api/permiso', permisoController.list);
router.get('/api/permiso/:id', permisoController.getById);
router.post('/api/permiso', permisoController.add);
router.put('/api/permiso/:id', permisoController.update);
router.delete('/api/permiso/:id', permisoController.delete);

// RUTAS TIPODOCUMENTO

router.get('/api/tipodocumento', tipo_documentoController.list);
router.get('/api/tipodocumento/:id', tipo_documentoController.getById);
router.post('/api/tipodocumento', tipo_documentoController.add);
router.put('/api/tipodocumento/:id', tipo_documentoController.update);
router.delete('/api/tipodocumento/:id', tipo_documentoController.delete);


// RUTAS ROLPERMISOS

router.get('/api/rolpermisos', rol_permisosController.list);
router.get('/api/rolpermisos/:id', rol_permisosController.getById);
router.get('/api/rolpermisosdetalle/:id', rol_permisosController.getDetailById);
router.post('/api/rolpermisos', rol_permisosController.add);
router.put('/api/rolpermisos/:id', rol_permisosController.update);
router.delete('/api/rolpermisos/:id', rol_permisosController.delete);


// RUTAS TERCERO

router.get('/api/tercero', terceroController.list);
router.get('/api/tercero/:id', terceroController.getById);
router.get('/api/tercerodetalle/:id', terceroController.getDetailById);
router.post('/api/tercero', terceroController.add);
router.put('/api/tercero/:id', terceroController.update);
router.delete('/api/tercero/:id', terceroController.delete);

// RUTAS USUARIO

router.get('/api/usuario', usuarioController.list);
router.get('/api/usuario/:id', usuarioController.getById);
router.get('/api/usuariodetalle/:id', usuarioController.getDetailById);
router.post('/api/usuario', usuarioController.add);
router.put('/api/usuario/:id', usuarioController.update);
router.delete('/api/usuario/:id', usuarioController.delete);

// RUTAS USUARIOROL

router.get('/api/usuariorol', usuario_rolController.list);
router.get('/api/usuariorol/:id', usuario_rolController.getById);
router.get('/api/usuarioroldetalle/:id', usuario_rolController.getDetailById);
router.post('/api/usuariorol', usuario_rolController.add);
router.put('/api/usuariorol/:id', usuario_rolController.update);
router.delete('/api/usuariorol/:id', usuario_rolController.delete);

// RUTAS BODEGA

router.get('/api/bodega', bodegaController.list);
router.get('/api/bodega/:id', bodegaController.getById);
router.get('/api/bodegadetalle/:id', bodegaController.getDetailById);
router.post('/api/bodega', bodegaController.add);
router.put('/api/bodega/:id', bodegaController.update);
router.delete('/api/bodega/:id', bodegaController.delete);


// RUTAS CLASIFICACIONREFERENCIA
router.get('/api/clasificacionreferencia', clasificacion_referenciaController.list);
router.get('/api/clasificacionreferencia/:id', clasificacion_referenciaController.getById);
router.post('/api/clasificacionreferencia', clasificacion_referenciaController.add);
router.put('/api/clasificacionreferencia/:id', clasificacion_referenciaController.update);
router.delete('/api/clasificacionreferencia/:id', clasificacion_referenciaController.delete);


// RUTAS REFERENCIAS

router.get('/api/referencias', referenciaController.list);
router.get('/api/referencias/:id', referenciaController.getById);
router.get('/api/referenciasdetalle/:id', referenciaController.getDetailById);
router.post('/api/referencias', referenciaController.add);
router.put('/api/referencias/:id', referenciaController.update);
router.delete('/api/referencias/:id', referenciaController.delete);


// RUTAS DOCUMENTO

router.get('/api/documento', documentoController.list);
router.get('/api/documento/:id', documentoController.getById);
router.get('/api/documentodetalle/:id', documentoController.getDetailById);
router.post('/api/documento', documentoController.add);
router.put('/api/documento/:id', documentoController.update);
router.delete('/api/documento/:id', documentoController.delete);


// RUTAS REFERENCIASDOCUMENTO

router.get('/api/referenciasdocumento', referencias_documentoController.list);
router.get('/api/referenciasdocumento/:id', referencias_documentoController.getById);
router.get('/api/referenciasdocumentodetalle/:id', referencias_documentoController.getDetailById);
router.post('/api/referenciasdocumento', referencias_documentoController.add);
router.put('/api/referenciasdocumento/:id', referencias_documentoController.update);
router.delete('/api/referenciasdocumento/:id', referencias_documentoController.delete);



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;
