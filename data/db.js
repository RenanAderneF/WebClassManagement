import pgp from 'pg-promise';

const db = pgp('postgresql://auth_db_owner:x1X8cSjFUnvi@ep-calm-sky-a41qibw3-pooler.us-east-1.aws.neon.tech/auth_db?sslmode=require')

export default db;