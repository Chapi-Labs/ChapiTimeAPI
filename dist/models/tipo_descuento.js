/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipo_descuento', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre_tipo_descuento: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		fecha_creacion: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tipo_descuento'
	});
};
