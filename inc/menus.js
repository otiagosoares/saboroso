const db = require('./db')

module.exports = {
    getMenus(){
        return new Promise((resolve, reject) => {

            const query = "SELECT * FROM tb_menus ORDER BY title"

            db.query(query, (err, results) => {
        
              if(err){
               reject(err)
              }

              resolve(results)
        
            })

        })
    }
}