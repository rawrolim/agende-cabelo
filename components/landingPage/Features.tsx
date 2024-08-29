import React from 'react';

const Features = () => {
    return (
        <div className="container" id="features">
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="card m-4">
                        <div className="card-body">
                            <h5 className="card-title">Busca Rápida</h5>
                            <p className="card-text">Encontre uma barbearia perto de você em segundos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card m-4">
                        <div className="card-body">
                            <h5 className="card-title">Avaliações</h5>
                            <p className="card-text">Veja as avaliações e escolha a melhor barbearia.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card m-4">
                        <div className="card-body">
                            <h5 className="card-title">Mapa Integrado</h5>
                            <p className="card-text">Visualize as barbearias diretamente no mapa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
