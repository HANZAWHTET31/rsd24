import { useState, useRef } from "react";

import { Box, List } from "@mui/material";
import { List as  ListIcon } from "@mui/icons-material";

import Item from "./Item";

export default function App() {
      const inputRef = useRef();

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
      };

      const add = (name) => {
            const id = data[data.length -1].id + 1;  
            setData([...data, {id, name, done: false}]);
      };

      const remove = (id) => {
            setData(data.filter(item => item.id !== id));
      };

      return (
		<Box>
			<h1>WELCOME TO REACT</h1>

			<Box sx={{ mx: "auto", maxWidth: "md", mt: 4}}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const name = inputRef.current.value;

						if (!name) {
							return false;
						} else {
							add(name);
							inputRef.current.value = "";
							inputRef.current.focus();
						}
					}}>
					<input
						type="text"
						ref={inputRef}
                                    style={{width: 500}}
					/>
					<input type="submit" />
				</form>

				<List>
					{data
						.filter((item) => !item.done)
						.map((item) => {
							return (
								<Item
									key={item.id}
									item={item}
									toggle={toggle}
									remove={remove}
								/>
							);
						})}
				</List>
				<hr />
				<List>
					{data
						.filter((item) => item.done)
						.map((item) => {
							return (
								<Item
									key={item.id}
									item={item}
									toggle={toggle}
									remove={remove}
								/>
							);
						})}
				</List>
			</Box>
		</Box>
	);
}