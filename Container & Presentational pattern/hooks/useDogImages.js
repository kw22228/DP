import { useEffect, useState } from 'react';

export default function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // fetch('https://dog.ceo/api/breed/labrador/images/random/6')
    //   .then((res) => res.json())
    //   .then(({ message }) => setDogs(message));

    async function fetchDogs() {
      const res = await fetch('https://dog.ceo/api/breed/labrador/images/random/6');
      const { message } = await res.json();
      setDogs(message);
    }
    fetchDogs();
  }, []);

  return dogs;
}
