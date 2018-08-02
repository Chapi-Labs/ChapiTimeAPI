/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permisos_por_tipo_puesto', {
		tipo_puesto_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'tipo_puesto',
				key: 'id'
			}
		},
		permiso_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'permiso',
				key: 'id'
			}
		}
	}, {
		tableName: 'permisos_por_tipo_puesto'
	});
};
