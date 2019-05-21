const dbName = 'dbforcourse';

const propForConnection = {
  host: 'localhost',
  user: 'root',
  password: 'vadim1299',
  database: dbName
};

const departmentTableName = 'department';
const collectionPointTableName = 'collection_point';
const garbageTypeTableName = 'garbage_type'; 
const binTableName = 'bin';
const dischargeTableName = 'discharge';
const userTableName = 'user';
const monthlyReportTableName = 'monthly_report';
const benefitLevelTableName = 'benefit_level';
const benefitsTableName = 'benefits';
const benefitTableName = 'benefit'


const idNames = {
  'department' : 'department_id',
  'collection_point' : 'coll_point_id',
  'garbage_type' : 'garbage_type_id',
  'bin' : 'bin_id',
  'discharge' : 'discharge_id',
  'user' : 'user_id',
  'monthly_report' : 'report_id',
  'benefit_level' : 'benefit_level_id',
  'benefit' : 'benefit_id'
}

const secretKeyForTokens = 'fishman';

module.exports = {
  dbName,
  propForConnection,
  departmentTableName,
  collectionPointTableName,
  garbageTypeTableName,
  binTableName,
  dischargeTableName,
  userTableName,
  monthlyReportTableName,
  benefitLevelTableName,
  benefitsTableName,
  benefitTableName,
  idNames,
  secretKeyForTokens

};