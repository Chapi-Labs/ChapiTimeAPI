/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('costo', {
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
		fecha_inicio: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		fecha_final: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		fecha_creacion: {
			type: DataTypes.DATE,
			allowNull: false
		},
		costo: {
			type: "DOUBLE",
			allowNull: false
		},
		fecha_actualizacion: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'costo'
	});
};
