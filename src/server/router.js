import template from './views/index.jade';

function router(req, res) {
  const title = 'Example App';

  res.send(template({
    title,
  }));
}

export default router;
