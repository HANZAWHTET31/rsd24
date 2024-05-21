import { useState } from "react";

import Item from "./Item";

export default function App() {
      const [data, setData] = useState([
            { id: 1, name: "Apple", done: true},
            { id: 2, name: "Mango", done: true},
            { id: 3, name: "Kiwi", done: true},
            { id: 4, name: "Pineapple", done: false}
      ]);

      const toggle = (id) => {
            setData(data.map(item => {
                  if(item.id === id) item.done = !item.done;
                  return item;
            }))
      }
      return (
            <>
                  <h1>WELCOME TO REACT</h1>

                  <ul>
                        {data.filter(item => !item.done).map(item => {
                              return (
                                    <Item key={item.id} item={item} toggle={toggle} />
                              )
                        })}
                  </ul>
                  <hr />
                  <u>
                        {data.filter(item => item.done).map(item => {
                              return (
                                    <Item key={item.id} item={item} toggle={toggle} />
                              )
                        })}
                  </u>
            </>
      );
}