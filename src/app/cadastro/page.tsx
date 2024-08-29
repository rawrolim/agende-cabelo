"use client"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Autocomplete from 'react-google-autocomplete';
import { useEffect, useState } from "react";

export default async function Cadastro() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        // Obter a localização atual do usuário
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({
                        lat: latitude,
                        lng: longitude,
                    });
                },
                (error) => {
                    console.error("Erro ao obter localização", error);
                }
            );
        }
    }, []);

    const handlePlaceSelected = (place) => {
        const location = place.geometry.location;
        setLocation({
            lat: location.lat(),
            lng: location.lng(),
        });
    };
    return (
        <div className='pt-5 pb-5 px-3'>
            <h3 className="text-center">Cadastrar barbearia</h3>
            <div className="mt-3">
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
                <div className="form-floating mb-3">
                    <input type="color" className="form-control" id="cor-tema" placeholder="******" />
                    <label htmlFor="cor-tema">Cor do tema</label>
                </div>
                <div className="form-floating mb-3">
                    <LoadScript googleMapsApiKey="SUA_CHAVE_DE_API_AQUI" libraries={['places']}>
                        <Autocomplete
                            apiKey="SUA_CHAVE_DE_API_AQUI"
                            onPlaceSelected={handlePlaceSelected}
                            defaultValue=""
                            options={{
                                types: ['address'],
                            }}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        />
                        {location && (
                            <GoogleMap
                                mapContainerStyle={{ height: '400px', width: '100%' }}
                                center={location}
                                zoom={15}
                            />
                        )}
                    </LoadScript>
                </div>
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" id="foto-local" placeholder="******" />
                    <label htmlFor="foto-local">Foto do local</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" id="logo" placeholder="******" />
                    <label htmlFor="logo">Logo</label>
                </div>

            </div>
        </div>
    )
}
