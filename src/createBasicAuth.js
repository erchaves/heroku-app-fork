import auth from 'http-auth';

/**
 * @param {Object} opts
 * @param {String} opts.user
 * @param {String} opts.pass
 * @return {Object} basicAuth
 */
function createBasicAuth(opts) {
  const basicAuth = auth.basic({
    realm: opts.realm,
  }, function (user, pass, cb) {
    cb(
      user === opts.user &&
      pass === opts.pass
    );
  });

  return basicAuth;
}

export default createBasicAuth;
