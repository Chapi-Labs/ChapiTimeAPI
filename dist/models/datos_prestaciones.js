/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('datos_prestaciones', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usuario_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario_trabajador',
				key: 'id'
			}
		},
		sueldo_base: {
			type: "DOUBLE",
			allowNull: false
		},
		bonificacion_incentivo: {
			type: "DOUBLE",
			allowNull: false
		},
		otra_bonificacion: {
			type: "DOUBLE",
			allowNull: true
		},
		gasolina: {
			type: "DOUBLE",
			allowNull: true
		},
		prestaciones_sobre_sueldo: {
			type: "DOUBLE",
			allowNull: true
		},
		otras_prestaciones: {
			type: "DOUBLE",
			allowNull: true
		},
		viaticos: {
			type: "DOUBLE",
			allowNull: true
		},
		otros: {
			type: "DOUBLE",
			allowNull: true
		},
		depreciacion: {
			type: "DOUBLE",
			allowNull: true
		},
		indemnizacion: {
			type: "DOUBLE",
			allowNull: true
		},
		aguinaldo: {
			type: "DOUBLE",
			allowNull: true
		},
		bono14: {
			type: "DOUBLE",
			allowNull: true
		},
		cuota_patronal: {
			type: "DOUBLE",
			allowNull: true
		},
		fecha_creacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		fecha_actualizacion: {
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
		gastos_indirectos: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'datos_prestaciones'
	});
};
