import RootRouteComponent from './Component';

if (!__CLIENT__) {
  require.ensure = function (arr, cb) {
    cb(require);
  };
}

const RootRoute = {
  component: RootRouteComponent,
  path: '/',

  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./PreviewRoute').default,
      ]);
    });
  },

  getIndexRoute(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./CodeRoute').default);
    });
  },
};

export default RootRoute;
