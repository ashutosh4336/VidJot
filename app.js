const express = require('express');

const app = express();

//           Middleware            //
// app.use(function(req, res, next) {
//   //   console.log(Date.now());
//   req.name = 'Ashutosh Panda';
//   next();
// });

app.get('/', (req, res) => {
  //   console.log(req.name);
  res.send('Hello From Node');
});

app.get('/about', (req, res) => {
  res.send('This is about Route');
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
