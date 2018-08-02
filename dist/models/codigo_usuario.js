/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('codigo_usuario', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		codigo: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		nombres: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		apellidos: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		created_by: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		updated_by: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'codigo_usuario'
	});
};
