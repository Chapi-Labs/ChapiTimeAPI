/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('actividad', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		abreviatura: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		actividad_no_cargable: {
			type: DataTypes.INTEGER(1),
			allowNull: false
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
		area_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'area',
				key: 'id'
			}
		}
	}, {
		tableName: 'actividad'
	});
};
