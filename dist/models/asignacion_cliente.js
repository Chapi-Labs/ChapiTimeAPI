/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('asignacion_cliente', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cliente_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cliente',
				key: 'id'
			}
		},
		usuario_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id'
			}
		}
	}, {
		tableName: 'asignacion_cliente'
	});
};
