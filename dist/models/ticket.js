/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ticket', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_created_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		last_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		last_message: {
			type: DataTypes.DATE,
			allowNull: false
		},
		subject: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		priority: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'ticket'
	});
};
