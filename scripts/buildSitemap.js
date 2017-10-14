import 'dev/dotEnv';
import sm from 'sitemap';
import configureStore from 'store/configureStore.prod';
import getProjects from 'actions/getProjects';
import routeHasVar from 'helpers/routeHasVar';
import replaceRouteVar from 'helpers/replaceRouteVar';

const store = configureStore({});

store.subscribe(() => {
  const state = store.getState();
  const urls = [];

  state.routes.forEach(({ route, entryField, contentType }) => {
    if (routeHasVar(route)) {
      Object.keys(state.routeData[contentType][entryField]).forEach((key) => {
        urls.push({
          url: replaceRouteVar(route, key),
          changefreq: 'daily',
          priority: 0.3,
        });
      });
    } else if (route !== '*') {
      urls.push({ url: route, changefreq: 'daily', priority: 0.3 });
    }
  });

  const sitemap = sm.createSitemap({
    hostname: process.env.SITEMAP_HOSTNAME,
    cacheTime: 600000,
    urls,
  });

  sitemap.toXML((err, xml) => {
    if (err) {
      throw err;
    }

    // eslint-disable-next-line
    console.log(xml);
  });
});

store.dispatch(getProjects());
