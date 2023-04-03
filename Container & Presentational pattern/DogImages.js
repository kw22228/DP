/** Presentatinal Component (props를 통하여 데이터를 받은 후 받은 데이터를 화면에 렌더링 한다.) */
import React from 'react';
import useDogImages from './hooks/useDogImages';

export default function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="dog" />);
}
