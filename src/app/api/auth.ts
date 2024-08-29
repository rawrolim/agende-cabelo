import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../config/database";
import md5 from 'md5'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = req.body;
        let sql = '';
        if (req.method == "POST") {
            if (!body.senha)
                throw new Error("Insira a senha");
            if (!body.email)
                throw new Error("Insira o email");

            sql = `SELECT * FROM barbeiro WHERE email=? AND senha=?`;
            const rs_barbeiro = await query(sql, [body.email, md5(body.senha)]);
            res.status(200).json(rs_barbeiro);
        } else {
            throw new Error("Method not allowed.")
        }
    } catch (err: any) {
        res.status(400).json(err.toString());
    }
}

