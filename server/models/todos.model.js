module.exports = (sequelize, Sequelize) => {
  const Todos = sequelize.define(
    'todos',
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: 6,
            msg: 'Title must be at least 6 characters in length',
          },
        },
        field: 'title',
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 6,
            msg: 'Description must be atleast 6 characters in length',
          },
        },
        field: 'description',
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      underscore: true,
    }
  );
  return Todos;
};
