const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//           Middleware            //
// app.use(function(req, res, next) {
//   //   console.log(Date.now());
//   req.name = 'Ashutosh Panda';
//   next();
// });

//Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  //   console.log(req.name);
  res.render('index');
});

app.get('/about', (req, res) => {
  const title = 'about';
  res.render('about', {
    title: title
  });
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
