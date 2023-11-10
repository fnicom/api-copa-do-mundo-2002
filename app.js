const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Lê o conteúdo do arquivo dados.json
const dadosRaw = fs.readFileSync('./dados.json');
const jsonData = JSON.parse(dadosRaw);

// Rota para obter os dados em formato JSON
app.get('/api/copa-do-mundo', (req, res) => {
  res.json(jsonData.copaDoMundo2002);
});

// Rota para servir o arquivo dados.json diretamente
app.get('/dados.json', (req, res) => {
  res.sendFile(__dirname + '/dados.json');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
