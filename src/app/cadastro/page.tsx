"use client"
import BarbeariaInterface from "@/interfaces/BarbeariaInterface";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cadastro() {
    const [form, setForm] = useState<BarbeariaInterface>({
        id: "",
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        cep: "",
        localizacao: "",
        foto_local: "",
        logo: "",
        createdAt: ""
    });
    const [localizacao, setLocalizacao] = useState({
        estado: "",
        cidade: "",
        bairro: "",
        numero: "",
        rua: "",
        complemento: ""
    })

    async function findCep(field: string){
        if(field.length >= 8){
            const res = await axios.get(`https://viacep.com.br/ws/${field}/json/ `);
            const data = res.data;
            setLocalizacao({...localizacao, 
                estado: data.estado,
                cidade: data.localidade,
                bairro: data.bairro,
                rua: data.logradouro,
                complemento: data.complemento
            });
        }
    }

    async function salvar(event:any){
        event.preventDefault();
        console.log(event)
    }

    return (
        <div className='pt-5 pb-5 px-3'>
            <h3 className="text-center">Cadastrar barbearia</h3>
            <form className="mt-3" onSubmit={salvar}>
                <div className="form-floating mb-3">
                    <input type="text" id="nome_barbearia" placeholder="Insira o nome" className="form-control" />
                    <label htmlFor="nome_barbearia">Nome da barbearia</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="telefone" placeholder="(22) 99999-9999" />
                    <label htmlFor="telefone">Telefone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="senha" placeholder="******" />
                    <label htmlFor="senha">Senha</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="senha-repetida" placeholder="******" />
                    <label htmlFor="senha-repetida">Senha repetida</label>
                </div>
                <div className="mb-3 d-flex flex-wrap">
                    <div className="form-floating col-12 col-sm-4 col-md-3 pe-3">
                        <input type="text" className="form-control" id="cep" placeholder="Insira seu CEP" onChange={e=>findCep(e.target.value)} />
                        <label htmlFor="cep">CEP da barbearia</label>
                    </div>
                    <div className="form-floating col-12 col-sm-4 col-md-3 pe-3">
                        <input value={localizacao.estado} type="text" readOnly={form.cep === ""} className="form-control" id="estado" placeholder="Insira a estado" />
                        <label htmlFor="estado">Estado</label>
                    </div>
                    <div className="form-floating col-12 col-sm-4 col-md-3 pe-3">
                        <input value={localizacao.cidade} type="text" readOnly={form.cep === ""} className="form-control" id="cidade" placeholder="Insira a cidade" />
                        <label htmlFor="cidade">Cidade</label>
                    </div>
                    <div className="form-floating col-12 col-sm-4 col-md-3 pe-3">
                        <input value={localizacao.bairro} type="text" readOnly={form.cep === ""} className="form-control" id="bairro" placeholder="Insira a bairro" />
                        <label htmlFor="bairro">Bairro</label>
                    </div>
                    <div className="form-floating col-12 col-sm-4 col-md-4 pe-3 mt-3">
                        <input value={localizacao.rua} type="text" readOnly={form.cep === ""} className="form-control" id="rua" placeholder="Insira a rua" />
                        <label htmlFor="rua">Rua</label>
                    </div>
                    <div className="form-floating col-12 col-sm-4 col-md-4 pe-3 mt-3">
                        <input value={localizacao.numero} type="text" readOnly={form.cep === ""} className="form-control" id="numero" placeholder="Insira a numero" />
                        <label htmlFor="numero">Nº</label>
                    </div>
                    <div className="form-floating col-12 col-sm-4 col-md-4 mt-3">
                        <input value={localizacao.complemento} type="text" readOnly={form.cep === ""} className="form-control" id="complemento" placeholder="Insira a complemento" />
                        <label htmlFor="complemento">Complemento</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" id="foto-local" placeholder="******" />
                    <label htmlFor="foto-local">Foto do local</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" id="logo" placeholder="******" />
                    <label htmlFor="logo">Logo</label>
                </div>
                <div className="col-12 text-center">
                    <button className="col-12 col-sm-6 col-md-4 col-lg-3 btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
    )
}
