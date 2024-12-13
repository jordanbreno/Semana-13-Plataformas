const express = require('express');
const app = express();
const port = 3000;


app.get('/ola_servidor', (req, res) => {
  res.json({ message: "Oi coleguinhas. Tudo tranquilo com vocês?" });
});


app.get('/que_horas_sao_por_favor', (req, res) => {
  const dataAtual = new Date();
  const horaAtual = dataAtual.toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' });
  res.json({ horaAtual });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
