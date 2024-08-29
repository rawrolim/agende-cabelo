CREATE TABLE barbeiro (
    id SERIAL PRIMARY KEY,
    barbearia_id INT NOT NULL,
    nome TEXT NOT NULL,
    FOREIGN KEY (barbearia_id) REFERENCES barbearia(id) ON DELETE CASCADE
);