import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of cocoa covered almonds unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);

    localStorage.setItem("Shoppinglist", JSON.stringify(listItems));

    console.log(`key: ${id}`);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);

    localStorage.setItem("Shoppinglist", JSON.stringify(listItems));

    console.log(id);
  };

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
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
      {/* <p onDoubleClick={handleClick}>
        Hello {name}! {count}
      </p>

      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button> */}
    </main>
  );
};

export default Content;
