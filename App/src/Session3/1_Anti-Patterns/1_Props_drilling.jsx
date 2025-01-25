/* 
  In complex React applications, managing state and ensuring that every component has access to the
data it needs can become challenging. This is often observed in the form of props drilling, where
props are passed from a parent component through multiple intermediary components before they
reach the child component that actually needs them. 
*/

type Item = { id: string; name: string };

function SearchableList({
  items,
  onItemClick,
}: {
  items: Item[];
  onItemClick: (id: string) => void;
}) {
  return (
    <div className="searchable-list">
      {/* Potentially some search functionality here */}
      <List items={items} onItemClick={onItemClick} />
    </div>
  );
}

function List({
  items,
  onItemClick,
}: {
  items: Item[];
  onItemClick: (id: string) => void;
}) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.id} data={item} onItemClick={onItemClick} />
      ))}
    </ul>
  );
}

function ListItem({
  data,
  onItemClick,
}: {
  data: Item;
  onItemClick: (id: string) => void;
}) {
  return (
    <li className="list-item" onClick={() => onItemClick(data.id)}>
      {data.name}
    </li>
  );
}

export default SearchableList;

/*
  A potential solution to avoid props drilling in React is by leveraging the Context API. It provides a
way to share values (data and functions) between components without having to explicitly pass props
through every level of the component tree.
*/