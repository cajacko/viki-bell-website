import React from 'react';
import TaxonomyTitle from 'components/TaxonomyTitle/TaxonomyTitle';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PostLoop from 'components/PostLoop/PostLoop.container';
import Item from 'components/Item/Item';

const Posts = ({ taxonomy, value, categoriesBySlug }) => (
  <div>
    <Item element={TaxonomyTitle} itemId={categoriesBySlug[value]} />
    <Breadcrumbs taxonomy={taxonomy} value={value} />
    <PostLoop taxonomy={taxonomy} value={value} />
  </div>
  );

export default Posts;
