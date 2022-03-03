const bcryptjs = require('bcryptjs')



const users = []

module.exports = {
    login: (req, res) => {
      
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username){
          const realPassword = bcryptjs.compareSync(password, users[i].password)
          if (realPassword){
            let returnUser = {...users[i]}
            delete returnUser.passwordHash
             return res.status(200).send(returnUser)
          }else{return res.status(400).send("User not found.")
            
          }

        }
         
        }
      return res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('Registering User')
      
      const {password} = req.body
      const passwordHash = bcryptjs.hashSync(password)
      req.body.password = passwordHash
      let regObject = req.body
      users.push(regObject) 
      console.log(req.body)
      let secureObj = {...regObject}
      delete secureObj.password
       
      
        
        res.status(200).send(secureObj)
    
      

      
    
    
      }
}
