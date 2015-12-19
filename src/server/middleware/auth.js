import httpAuth from 'http-auth';

const authUser = process.env.AUTH_USER;
const authPass = process.env.AUTH_PASS;

let auth;

if (authUser) {
  auth = httpAuth.basic({
    realm: 'app',
  }, function (user, pass, cb) {
    cb(user === authUser && pass === authPass);
  });
} else {
  auth = function (req, res, next) {
    next();
  };
}

export default auth;
