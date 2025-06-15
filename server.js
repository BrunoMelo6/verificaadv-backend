
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Conexão MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro MongoDB:', err));

// Rota de teste
app.get('/', (req, res) => {
    res.send('API VerificaADV rodando ✅');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
