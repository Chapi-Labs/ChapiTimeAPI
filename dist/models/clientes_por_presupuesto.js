/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clientes_por_presupuesto', {
		cliente_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'proyecto_presupuesto',
				key: 'id'
			}
		},
		presupuesto_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'cliente',
				key: 'id'
			}
		}
	}, {
		tableName: 'clientes_por_presupuesto'
	});
};
