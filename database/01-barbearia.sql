CREATE TABLE barbearia (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    background_color VARCHAR(7),
    localizacao VARCHAR(255),
    foto_local BYTEA,
    logo BYTEA,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);