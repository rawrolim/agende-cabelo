"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Hero = () => {
    const roter = useRouter();

    return (
        <div className="p-5 text-white bg-secondary text-center">
            <div className="container">
                <h1 className="display-4">Encontre as Melhores Barbearias na Região dos Lagos</h1>
                <p className="lead">O serviço definitivo para quem procura qualidade e estilo.</p>
                <div className='btn-group gap-2'>
                    <a onClick={()=>roter.push("/barbeiros")} className="btn btn-light btn-lg">Procurar barbearias</a>
                    <a onClick={()=>roter.push("/cadastro")} className="btn btn-light btn-lg">Cadastrar barbearia</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
