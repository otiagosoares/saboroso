const db = require('./db')

module.exports = {
    render(req, res, error){
        res.render('reservation', {
            title: 'Reservas - Restaurante Saboroso' ,
            backgroundImage: 'images/img_bg_2.jpg',
            h1: 'Reserve uma mesa!',
            body: req.body,
            error
          })
    },
    save(fields){

        

    }
}