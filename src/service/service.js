// server.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/pizzaApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definição do modelo para a coleção de pizzas
const Pizza = mongoose.model('Pizza', {
  name: String,
  value: Number,
  image: String,
});

// Configuração do multer para o upload de imagens
const storage = multer.diskStorage({
  destination: 'img/',
  filename: (req, file, cb) => {
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Rota para cadastrar uma nova pizza
app.post('/api/addPizza', upload.single('image'), async (req, res) => {
  try {
    const { nmPizza, vlPizza } = req.body;

    // Crie uma instância do modelo Pizza com os dados fornecidos
    const newPizza = new Pizza({
      name: nmPizza,
      value: vlPizza,
      image: req.file.filename, // O nome do arquivo da imagem após o upload
    });

    // Salve a pizza no banco de dados
    await newPizza.save();

    res.status(200).json({ message: 'Pizza cadastrada com sucesso!' });
  } catch (error) {
    console.error('Erro durante o cadastro da pizza:', error);
    res.status(500).json({ error: 'Erro durante o cadastro da pizza.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
