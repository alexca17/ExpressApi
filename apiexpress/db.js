import {Pool} from 'pgnode'
//import { Pool } from 'pg';

const Con = new Pool({
    user: "alexca",
    password: "carrasco123",
    database: "users",
    host: "database-1-instance-1.cijxunu3idoi.us-east-1.rds.amazonaws.com",
    port: 5432
});

export default Con;