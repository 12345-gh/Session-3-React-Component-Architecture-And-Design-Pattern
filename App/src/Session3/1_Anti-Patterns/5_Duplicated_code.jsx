/*
  It’s a familiar sight in many code bases – chunks of identical or very similar code scattered across
different parts of the application. Duplicated code not only bloats the code base but also introduces
potential points of failure. When a bug is detected or an enhancement is needed, every instance of
the duplicated code may need to be altered, leading to an increased likelihood of introducing errors.
*/

const List = ({ items }: { items: { name: string }[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

function AdminList(props: { users: { isAdmin: boolean; name: string }[] }) {
  const filteredUsers = props.users.filter((user) => user.isAdmin);
  return <List items={filteredUsers} />;
}

function ActiveList(props: { users: { isActive: boolean; name: string }[] }) {
  const filteredUsers = props.users.filter((user) => user.isActive);
  return <List items={filteredUsers} />;
}

/*
  The DRY (don’t repeat yourself) principle comes to the rescue here. By centralizing common logic
into utility functions or higher-order components (HOCs), the code becomes more maintainable
and readable, and less prone to errors. For this example, we could abstract the filtering logic and reuse
it, ensuring a singular source of truth and easier updates.
*/