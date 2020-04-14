var express = require('express');
var router = express.Router();

const menus = require('../inc/menus')
const reservations = require('../inc/reservations')
const contact = require('../inc/contacts')

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
  contact.render(req, res, null, null)
})

router.post('/contacts', (req, res, next)=>{

  if(!req.body.name){
    contact.render(req,res, "Digite um nome.")
  }else if(!req.body.email){
    contact.render(req,res, "Infome um email valido.")
  }else if(!req.body.message){
    contact.render(req,res, "Escreva alguma coisa.")
  }else{

    contact.save(req.body).then(results=>{
      req.body = {}
      contact.render(req, res, null, "Obrigado pelo seu contato, retornaremos em breve!")
    }).catch((err)=>{
      contact.render(req, res, err.message)
    })
    
  }
  
})

router.get('/reservations', (req, res, next)=>{
  reservations.render(req, res, null, null)
})

router.post('/reservations', (req, res)=> {

    if(!req.body.name){
      reservations.render(req,res, "Digite um nome.")
    }else if(!req.body.email){
      reservations.render(req,res, "Infome um email valido.")
    }else if(!req.body.people){
      reservations.render(req,res, "Infome o número de pessoas.")
    }else if(!req.body.date){
      reservations.render(req,res, "Info a data da reserva.")
    }else if(!req.body.time){
      reservations.render(req,res, "Informe a hora da reserva.")
    }else{

      reservations.save(req.body).then(results=>{
        req.body = {}
        reservations.render(req, res, null, "Reserva realizada com sucesso!")
      }).catch((err)=>{
        reservations.render(req, res, err.message)
      })

    }
    


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
