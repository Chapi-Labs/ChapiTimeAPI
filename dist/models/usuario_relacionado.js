/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario_relacionado', {
		usuario_pertenece_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'usuario',
				key: 'id'
			}
		},
		usuario_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'usuario',
				key: 'id'
			}
		}
	}, {
		tableName: 'usuario_relacionado'
	});
};
