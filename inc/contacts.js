const db = require('./db')

module.exports = {
    render(req, res, error, success){
        res.render('contact',{
            title: 'Contato - Restaurante Saboroso' ,
            backgroundImage: 'images/img_bg_3.jpg',
            h1: 'Diga um Oi!',
            body: req.body,
            error,
            success
          })
    },
    save(fields){

        return new Promise((resolve, reject) => {

            let query = `INSERT 
                    INTO tb_contacts 
                    (name, email, message) 
                    VALUES (?, ?, ?)`
            db.query(query, [
                fields.name,
                fields.email,
                fields.message
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