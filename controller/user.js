const axios = require("axios");
const APIURL = process.env.API_URL;
module.exports = {

getUser : (req , res , next ) =>{

    axios.get(APIURL+'users')
    .then(function (response) {
      // handle success
      console.log(response.status);
      if(response.status == 200){
        res.status(200).send(response.data);
      }else{
        // need to implement throw error
      }
      
    })
    .catch((error)=> {
      // handle error
      console.log(error.message);
    })
    
}


}