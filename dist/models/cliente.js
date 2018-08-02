/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cliente', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nit: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true
		},
		razon_social: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		nombre_comercial: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		servicios_prestados: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		creado_por_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'codigo_usuario',
				key: 'id'
			}
		},
		actualizado_por_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'codigo_usuario',
				key: 'id'
			}
		},
		fecha_creacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		fecha_actualizacion: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'cliente'
	});
};
