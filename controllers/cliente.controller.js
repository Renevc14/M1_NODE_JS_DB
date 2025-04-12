const { Cliente } = require('../models');
exports.obtenerClientes = async (req, res) => {
 const clientes = await Cliente.findAll();
 res.json(clientes);
};
exports.crearCliente = async (req, res) => {
 const cliente = await Cliente.create(req.body);
 res.status(201).json(cliente);
};

exports.obtenerClientePorId = async (req, res) => {
 const { id } = req.params;
 const cliente = await Cliente.findByPk(id);
 if (!cliente) {
   return res.status(404).json({ error: 'Cliente no encontrado' });
 }
 res.json(cliente);
}
exports.actualizarCliente = async (req, res) => {
 const { id } = req.params;
 const cliente = await Cliente.findByPk(id);
 if (!cliente) {
   return res.status(404).json({ error: 'Cliente no encontrado' });
 }
 await cliente.update(req.body);
 res.json(cliente);
};
exports.eliminarCliente = async (req, res) => {
 const { id } = req.params;
 const cliente = await Cliente.findByPk(id);
 if (!cliente) {
   return res.status(404).json({ error: 'Cliente no encontrado' });
 }
 await cliente.destroy();
 res.status(204).send();
};
