var express = require('express');
var router = express.Router();

const menus = require('../inc/menus')

/* GET home page. */
router.get('/', function(req, res, next) {

    menus.getMenus().then(results =>{
      res.render('index', { 
        title: 'Restaurante Saboroso' ,
        menus: results
      });
    })
});

router.get('/contacts', (req, res, next)=>{
  res.render('contact',{
    title: 'Contato - Restaurante Saboroso' ,
    backgroundImage: 'images/img_bg_3.jpg',
    h1: 'Diga um Oi!'
  })
})

router.get('/reservations', (req, res, next)=>{
  res.render('reservation', {
    title: 'Reservas - Restaurante Saboroso' ,
    backgroundImage: 'images/img_bg_2.jpg',
    h1: 'Reserve uma mesa!'
  })
})

router.get('/menus', (req, res, next)=>{
  menus.getMenus().then(results => {
    res.render('menu', {
      title: 'Menus - Restaurante Saboroso' ,
      backgroundImage: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu!',
      menus: results
    })
  })
})

router.get('/services', (req, res, next)=>{
  res.render('services', {
    title: 'Nossos Serviços - Restaurante Saboroso' ,
    backgroundImage: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
  })
})


module.exports = router;
