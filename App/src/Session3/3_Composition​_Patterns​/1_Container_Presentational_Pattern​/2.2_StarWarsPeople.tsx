import useStarWarsPeople from './2.1_useStarWarsPeople';

interface IPerson {
  name: string;
  height: string;
  birth_year: string;
}

const StarWarsPeople = () => {
  const people = useStarWarsPeople();

  return people.map((person: IPerson, i: number) => (
    <div key={i}>
      <h1>{person.name}</h1>
      <p>Height: {person.height}</p>
      <p>Birth Year: {person.birth_year}</p>
    </div>
  ));
}

export default StarWarsPeople;