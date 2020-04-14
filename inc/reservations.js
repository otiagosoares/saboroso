const db = require('./db')

module.exports = {
    render(req, res, error, success){
        res.render('reservation', {
            title: 'Reservas - Restaurante Saboroso' ,
            backgroundImage: 'images/img_bg_2.jpg',
            h1: 'Reserve uma mesa!',
            body: req.body,
            error,
            success

          })
    },
    save(fields){
        
        return new Promise((resolve, reject)=>{

            let date = fields.date.split('/')
            fields.date = `${date[2]}-${date[1]}-${date[0]}`
            let query = `INSERT 
                    INTO tb_reservations 
                    (name, email, people, date, time) 
                    VALUES (?, ?, ?, ?, ?)`
            db.query(query, [
                fields.name,
                fields.email,
                fields.people,
                fields.date,
                fields.time,
            ], (err, results)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }

            })

        })

    }
}