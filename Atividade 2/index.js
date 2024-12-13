const express = require('express');
const path = require('path');
const app = express();

app.get('/animais', (req, res) => {
  res.sendFile(path.join(__dirname, './páginas/animais.html'));
});

app.use('/informacoes', express.static('informacoes'));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});