const { Pedido } = require('../models');
exports.obtenerPedidos = async (req, res) => {
 const pedidos = await Pedido.findAll();
 res.json(pedidos);
};
exports.crearPedido = async (req, res) => {
 const pedido = await Pedido.create(req.body);
 res.status(201).json(pedido);
};
exports.obtenerPedidoPorId = async (req, res) => {
 const { id } = req.params;
 const pedido = await Pedido.findByPk(id);
 if (!pedido) {
   return res.status(404).json({ error: 'Pedido no encontrado' });
 }
 res.json(pedido);
}
exports.actualizarPedido = async (req, res) => {
 const { id } = req.params;
 const pedido = await Pedido.findByPk(id);
 if (!pedido) {
   return res.status(404).json({ error: 'Pedido no encontrado' });
 }
 await pedido.update(req.body);
 res.json(pedido);
};
exports.eliminarPedido = async (req, res) => {
 const { id } = req.params;
 const pedido = await Pedido.findByPk(id);
 if (!pedido) {
   return res.status(404).json({ error: 'Pedido no encontrado' });
 }
 await pedido.destroy();
 res.status(204).send();
};
