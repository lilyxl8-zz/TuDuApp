import React from 'react';
import ListView from './list_view';

const ListList = ({ lists, listStyle }) => (
  <div>
    { lists.map(list =>
      <ListView key={ list.id } list={ list } style={ listStyle } />
    ) }
  </div>
);

export default ListList;
