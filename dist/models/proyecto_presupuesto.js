/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('proyecto_presupuesto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre_presupuesto: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		honorarios: {
			type: "DOUBLE",
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
		},
		estado: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'proyecto_presupuesto'
	});
};
