import httpAuth from 'http-auth';

/**
 * @param {String} authUser
 * @param {String} authPass
 * @returns {Function}
 */
function auth(authUser, authPass) {
  return httpAuth.basic({
    realm: 'app',
  }, function (user, pass, cb) {
    cb(
      user === authUser &&
      pass === authPass
    );
  });
}

export default auth;
