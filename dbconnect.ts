import mysql from "mysql";
import util from "util";

export const conn = mysql.createConnection({
    // host: "fdb1030.awardspace.net",
    // port: 3306,
    // user:"4543155_teendeli",
    // password:"teen2185",
    // database:"4543155_teendeli",
    host:"202.28.34.197",
    database:"web66_65011212185",
    user:"web66_65011212185",
    password:"65011212185@csmsu"
});
export const queryAsync = util.promisify(conn.query).bind(conn);