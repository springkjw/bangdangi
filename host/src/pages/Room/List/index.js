import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import {rooms} from 'graph/queries';
import View from './view';

export default () => {
  const {loading, error, data} = useQuery(rooms.GET_ROOMS);

  return (
    <View
      loading={loading}
      data={data}
    />
  );
};
