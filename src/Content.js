import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  // const [count, setCount] = useState(0);

  // const handleNameChange = () => {
  //   const names = ["Bob", "Kevin", "Victor"];
  //   const int = Math.floor(Math.random() * 3);

  //   setName(names[int]);
  // };

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const handleClick2 = () => {
  //   console.log(count);
  // };

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
      {/* <p onDoubleClick={handleClick}>
        Hello {name}! {count}
      </p>

      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button> */}
    </>
  );
};

export default Content;
