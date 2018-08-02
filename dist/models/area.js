/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('area', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
		nombre: {
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
		departamento_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'departamento',
				key: 'id'
			}
		}
	}, {
		tableName: 'area'
	});
};
