module.exports = (req, res, next) => {
    if(loggedIn == null ){
        return  res.redirect('/');
    }
    next()
}