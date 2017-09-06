import React from 'react';
import TaxonomyTitle from 'components/TaxonomyTitle/TaxonomyTitle';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PostLoop from 'components/PostLoop/PostLoop.container';

const Posts = ({ taxonomy, value }) => (
  <div>
    <TaxonomyTitle taxonomy={taxonomy} value={value} />
    <Breadcrumbs taxonomy={taxonomy} value={value} />
    <PostLoop taxonomy={taxonomy} value={value} />
  </div>
);

export default Posts;
