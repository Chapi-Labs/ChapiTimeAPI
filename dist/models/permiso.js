/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permiso', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		etiqueta: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		permiso: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		fecha_creacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		fecha_actualizacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		creado_por: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		actualizado_por: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'permiso'
	});
};
