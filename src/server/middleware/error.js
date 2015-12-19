import template from '../views/error.jade';

function error(err, req, res) {
  const isDev = req.app.get('env') === 'development';
  res.status(err.status || 500);
  res.send(template({
    message: err.message,
    error: isDev ? err : {},
  }));
}

export default error;
