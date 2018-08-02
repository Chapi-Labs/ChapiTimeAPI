/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('puesto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		tipo_puesto_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'tipo_puesto',
				key: 'id'
			}
		},
		departamento_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'departamento',
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
		}
	}, {
		tableName: 'puesto'
	});
};
