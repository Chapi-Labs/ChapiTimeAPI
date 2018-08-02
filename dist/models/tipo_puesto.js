/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipo_puesto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre_puesto: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		descripcion: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		abreviatura: {
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
		tableName: 'tipo_puesto'
	});
};
