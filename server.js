const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối đến MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food_data';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối tới MongoDB thành công!'))
  .catch(err => console.error(err));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với API phân tích dữ liệu thực phẩm!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${PORT}`);
});