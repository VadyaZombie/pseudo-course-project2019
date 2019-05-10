const dbName = 'dbforcourse';

const propForConnection = {
  host: 'localhost',
  user: 'root',
  password: 'vadim1299',
  database: dbName
};

const departmentTableName = 'department';


const idNames = {
  'department' : 'department_id'
}

module.exports = {
  dbName,
  propForConnection,
  departmentTableName,
  idNames
};