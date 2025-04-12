const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');
router.get('/pedidos', obtenerPedidos);
router.post('/pedidos', crearPedido);
router.get('/pedidos/:id', obtenerPedidoPorId);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);
module.exports = router;