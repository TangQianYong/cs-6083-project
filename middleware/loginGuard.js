const guard = (req, res, next) => {
    // if(req.url != '/login' && req.url != '/register' && !req.session.userid) {
    //     res.redirect('/login');
    // } else {
    //     next();
    // }
    const url = req.url;
    const didUserLogin = req.session.userid;
    const didAdminLogin = req.session.adminid;
    if(!didUserLogin && !didAdminLogin) {
        if(url != '/login' && url != '/register' && url != '/admin/login' && url != '/admin/register') {
            res.redirect('/login');
        } else{
            next();
        }
    } else if(didUserLogin && !didAdminLogin) {
        if(url == '/admin/dashboard') {
            res.redirect('/admin/login');
        } else {
            next();
        }
    } else {
        next();
    }
}
module.exports = guard;