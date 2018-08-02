/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario_socio', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'usuario',
				key: 'id'
			}
		}
	}, {
		tableName: 'usuario_socio'
	});
};
