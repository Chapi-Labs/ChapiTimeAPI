/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('registro_horas', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		actividad_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'actividad',
				key: 'id'
			}
		},
		cliente_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cliente',
				key: 'id'
			}
		},
		ingresado_por_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario_trabajador',
				key: 'id'
			}
		},
		proyecto_presupuesto_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'proyecto_presupuesto',
				key: 'id'
			}
		},
		fecha_horas: {
			type: DataTypes.DATE,
			allowNull: false
		},
		horas_invertidas: {
			type: "DOUBLE",
			allowNull: false
		},
		fecha_creacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		aprobado: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		horas_extraordinarias: {
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
		fecha_actualizacion: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'registro_horas'
	});
};
