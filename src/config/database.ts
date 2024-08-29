import { Pool } from "pg";

function connectDb(){
    const pool = new Pool({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: Number(process.env.POSTGRES_PORT),
    });
    return pool;
}

export async function query(sql: string, values:any){
    try {
        const db = await connectDb();
        for (let i = 0; i < values.length; i++) {
            if (values[i] == "")
                values[i] = null
        };
        const rs = await db.query(sql, values);
        await db.end();
        return rs.rows;
    } catch (e:any) {
        console.log(`ERROR`, e.toString());
        throw new Error(`Erro na query do banco de dados.`);
    }
}
