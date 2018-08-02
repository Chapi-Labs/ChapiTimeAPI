/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('descuento', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		prestaciones_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'datos_prestaciones',
				key: 'id'
			}
		},
		nombreDescuento: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		monto: {
			type: "DOUBLE",
			allowNull: false
		},
		tipo_descuento_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'tipo_descuento',
				key: 'id'
			}
		}
	}, {
		tableName: 'descuento'
	});
};
