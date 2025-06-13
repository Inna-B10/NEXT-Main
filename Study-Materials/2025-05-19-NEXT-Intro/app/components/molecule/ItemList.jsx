"use client";

import { useState } from "react";

export default function ItemList({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  async function addItem() {
    const res = await fetch("/api/mongodb", {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({ name: newItem }),
    });
    const newItemRes = await res.json();
    setItems([...items, { _id: newItemRes.insertId, name: newItem }]);
    setNewItem("");
  }

  async function deleteItem(id) {
    await fetch(`/api/mongodb/${id}`, {
      cache: "no-cache",
      method: "DELETE",
    });
    setItems(items.filter((item) => item._id !== id));
  }

  return (
    <>
      <div>
        <input
          className="border"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <ul className="grid gap-8">
          {items.map((item) => (
            <li key={item._id}>
              {item.name}
              <button
                className=" p-2 text-red-500"
                onClick={() => deleteItem(item._id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// "use client";
// import { useState } from "react";

// export default function ItemList({ initialItems }) {
//   const [items, setItems] = useState(initialItems);
//   const [newItem, setNewItem] = useState("");

//   async function addItem() {
//     const res = await fetch("/api/mongodb", {
//       cache: "no-store",
//       method: "POST",
//       body: JSON.stringify({ name: newItem }),
//     });
//     const newItemRes = await res.json();
//     setItems([...items, { _id: newItemRes.insertedId, name: newItem }]);
//     setNewItem("");
//   }

//   async function deleteItem(id) {
//     await fetch(`/api/mongodb/${id}`, { cache: "no-store", method: "DELETE" });
//     setItems(items.filter((item) => item._id !== id));
//   }

//   return (
//     <div>
//       <input
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="New item"
//       />
//       <button onClick={addItem}>Add</button>
//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             {item.name} <button onClick={() => deleteItem(item._id)}>X</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
