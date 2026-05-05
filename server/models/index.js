const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('Admin', 'Member'), defaultValue: 'Member' }
});

const Project = sequelize.define('Project', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT
});

const Task = sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('To Do', 'In Progress', 'Done'), defaultValue: 'To Do' },
    dueDate: DataTypes.DATE
});

User.hasMany(Project);
Project.belongsTo(User);
Project.hasMany(Task, { onDelete: 'CASCADE' });
Task.belongsTo(Project);
Task.belongsTo(User, { as: 'Assignee' });

module.exports = { sequelize, User, Project, Task };
