CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    comentario TEXT,
    dia DATE NOT NULL,
    hora TIME NOT NULL,
    cliente_nome VARCHAR(255) NOT NULL,
    cliente_telefone VARCHAR(20),
    aceite_barbearia BOOLEAN DEFAULT FALSE,
    aceite_cliente BOOLEAN DEFAULT FALSE,
    barbearia_id INT NOT NULL,
    barbearia_servico_id INT NOT NULL,
    FOREIGN KEY (barbearia_id) REFERENCES barbearia(id) ON DELETE CASCADE,
    FOREIGN KEY (barbearia_servico_id) REFERENCES barbearia_servico(id) ON DELETE CASCADE
);