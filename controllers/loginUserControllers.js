const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const {email, password} = req.body 

    User.findOne({ email: email }.then((user) => {
        console.log(user)

        // if(){

        // }
    }))
}