// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
import Handlebars from 'handlebars';
import { readFileSync, writeFile } from 'fs';
import { join, dirname } from 'path';
import { minify } from 'html-minifier';
import mkdirp from 'mkdirp';
// import Main from 'views/server';
import manifest from 'dist/assets/scripts/manifest.json';
import configureStore from 'store/configureStore.prod';
import getProjects from 'actions/getProjects';

const file = readFileSync(join(__dirname, '../src/index.html'), 'utf8');
const template = Handlebars.compile(file);
const manifestContent = readFileSync(join(__dirname, `../dist/assets/scripts/${manifest['manifest.js']}`), 'utf8');

// eslint-disable-next-line
function renderPage(location, htmlData, reactData, state) {
  let url = location;

  if (url === '/') {
    url = '/index';
  }

  // const page = ReactDOMServer.renderToString(
  //   <Main location={location} context={{}} state={state} />,
  // );

  const originalHtml = template({
    // react: page,
    manifest: manifestContent,
    state: JSON.stringify(state).replace(/</g, '\\u003c'),
    js: {
      main: `/assets/scripts/${manifest['main.js']}`,
      vendor: `/assets/scripts/${manifest['vendor.js']}`,
    },
    css: {
      lib: '/assets/styles/lib.css',
      style: '/assets/styles/style.min.css',
    },
    ...htmlData,
  });

  const html = minify(originalHtml, {
    removeComments: true,
    collapseWhitespace: true,
  });

  const path = join(__dirname, `../dist${url}.html`);

  mkdirp(dirname(path), (err) => {
    if (err) {
      throw err;
    }

    writeFile(path, html);
  });
}

function getPages() {
  return [
    {
      url: '/',
      htmlData: {},
      reactData: {},
    },
  ];
}

const pages = getPages();

const store = configureStore({});

store.subscribe(() => {
  const state = store.getState();

  pages.forEach(({ url, htmlData, reactData }) => {
    renderPage(url, htmlData, reactData, state);
  });
});

store.dispatch(getProjects());
