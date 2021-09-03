import { useSelector } from 'react-redux';

import List from '../presentational/List';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => state);

  return (
    <>
      {restaurants.map((restaurant, index) => (
        <List
          key={index}
          value={restaurant}
        />
      ))}
    </>
  );
}
