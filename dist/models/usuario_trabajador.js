/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario_trabajador', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'usuario',
				key: 'id'
			}
		},
		direccion: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fecha_egreso: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		dpi: {
			type: DataTypes.STRING(20),
			allowNull: true,
			unique: true
		},
		nit: {
			type: DataTypes.STRING(20),
			allowNull: true,
			unique: true
		},
		telefono: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		numero_afiliacion_igss: {
			type: DataTypes.STRING(15),
			allowNull: true
		}
	}, {
		tableName: 'usuario_trabajador'
	});
};
