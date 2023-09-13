'use client';

import state from './state';

const Client = () => {
  const data = state.useData();
  console.log('Client', data);

  return <div>Client render: {data}</div>;
};

export default Client;
