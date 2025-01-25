/*
  Statefulness and Custom Hooks
*/
import { useState, useEffect } from "react";

export default function useStarWarsPeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchStwarWarsPeople() {
      const res = await fetch(
        "https://swapi.dev/api/people"
      );
      const { results } = await res.json();
      setPeople(results);
    }

    fetchStwarWarsPeople();
  }, []);

  return people;
}