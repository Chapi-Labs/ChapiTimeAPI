/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ticket_message', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ticket_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'ticket',
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: true
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
		tableName: 'ticket_message'
	});
};
