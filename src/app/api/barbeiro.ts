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
            if(!body.servicos)
                throw new Error("Selecione pelo menos um serviço");
            if(!body.nome)
                throw new Error("Insira seu nome");
            if(!body.localizacao)
                throw new Error("Insira sua localização");
            if(!body.foto_pessoal)
                throw new Error("Selecione uma foto sua");
            if(!body.telefone)
                throw new Error("Insira o telefone");
            if(!body.logo)
                throw new Error("Insira a logo");
            if(!body.background_color)
                throw new Error("Selecione uma cor de fundo");

            sql = `INSERT INTO barbeiro(
                nome,
                localizacao,
                foto_pessoal,
                email,
                senha,
                telefone,
                logo,
                background_color) VALUES(?,?,?,?,?,?,?,?)`;
            const valores = [
                body.nome,
                body.localizacao,
                body.foto_pessoal,
                body.email,
                md5(body.senha),
                body.telefone,
                body.logo,
                body.background_color
            ]
            await query(sql, valores);

            const rs_id = await query("SELECT id FROM barbeiro WHERE email = ?", [body.email]);
            const barbeiro_id = rs_id[0].id;
            
            body.servicos.map(async servico => {
                sql = `INSERT INTO barbeiro_servico(
                    barbeiro_id,
                    nome
                ) VALUES (?,?)`;
                await query(sql,[barbeiro_id,servico]);
            });

            res.status(200).json({ id: barbeiro_id });
        } else if (req.method == "GET") {
            const barbeiro_id = req.query.id;
            if(!barbeiro_id)
                throw new Error("Barbeiro não informado.");

            sql = `SELECT * FROM barbeiro WHERE MD5(id) = ?`
            const rs_barbeiro = await query(sql,[barbeiro_id]);

            sql = `SELECT nome FROM barbeiro_servico WEHRE barbeiro_id = ?`
            const rs_servicos = await query(sql,[barbeiro_id]);

            let barbeiro = {
                info: null,
                servicos: []
            };
            if(rs_barbeiro.length == 1){
                rs_barbeiro[0].foto_pessoal = rs_barbeiro[0].foto_pessoal.toString('base64');
                barbeiro.info = rs_barbeiro[0];
                barbeiro.servicos = rs_servicos;
            }else{
                throw new Error("Nenhum barbeiro encontrado.");
            }

            res.status(200).json(barbeiro);
        } else {
            throw new Error("Method not allowed.")
        }
    } catch (err: any) {
        res.status(400).json(err.toString());
    }
}

