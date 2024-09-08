import { query } from "@/config/database";
import md5 from 'md5'
import { NextResponse } from "next/server";

export async function GET(request: Request, params: { id: string }) {

    /*const barbearia_id = req.query.id;
    if(!barbearia_id)
        throw new Error("Barbeiro não informado.");

    sql = `SELECT * FROM barbeiro WHERE MD5(id) = ?`
    const rs_barbeiro = await query(sql,[barbearia_id]);

    sql = `SELECT nome FROM barbearia_servico WEHRE barbearia_id = ?`
    const rs_servicos = await query(sql,[barbearia_id]);

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

    res.status(200).json(barbeiro);*/
    const data = params
    return NextResponse.json({ data }, { status: 200 })
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        let sql = '';
        if (!body.senha)
            throw new Error("Insira a senha");
        if (!body.email)
            throw new Error("Insira o email");
        if (!body.servicos)
            throw new Error("Selecione pelo menos um serviço");
        if (!body.nome)
            throw new Error("Insira seu nome");
        if (!body.localizacao)
            throw new Error("Insira sua localização");
        if (!body.foto_local)
            throw new Error("Selecione uma foto sua");
        if (!body.telefone)
            throw new Error("Insira o telefone");
        if (!body.logo)
            throw new Error("Insira a logo");

        sql = `INSERT INTO barbearia(
                nome,
                localizacao,
                foto_local,
                email,
                senha,
                telefone,
                logo,
                lat, lng) VALUES(?,?,?,?,?,?,?,?,?)`;
        const valores = [
            body.nome,
            body.localizacao,
            body.foto_local,
            body.email,
            md5(body.senha),
            body.telefone,
            body.logo,
            body.lat,
            body.lng
        ];
        await query(sql, valores);

        const rs_id = await query("SELECT id FROM barbearia WHERE email = ?", [body.email]);
        const barbearia_id = rs_id[0].id;

        body.servicos.map(async servico => {
            sql = `INSERT INTO barbearia_servico(
                    barbearia_id,
                    nome
                ) VALUES (?,?)`;
            await query(sql, [barbearia_id, servico]);
        });

        return NextResponse.json({ id: barbearia_id }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ err: err.toString() }, { status: 400 })
    }
}
