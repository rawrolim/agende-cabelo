CREATE TABLE barbearia (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    telefone TEXT,
    localizacao TEXT,
    lat TEXT,
    lng TEXT,
    foto_local TEXT,
    logo TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);