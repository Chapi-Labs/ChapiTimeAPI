/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('registro_horas_presupuesto', {
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
		proyecto_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'proyecto_presupuesto',
				key: 'id'
			}
		},
		horas_presupuestadas: {
			type: "DOUBLE",
			allowNull: false
		},
		fecha_creacion: {
			type: DataTypes.DATE,
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
		},
		usuario_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario_trabajador',
				key: 'id'
			}
		}
	}, {
		tableName: 'registro_horas_presupuesto'
	});
};
