export default function Item({item, toggle}){
      return (
            <li>
                  { item.done ? (
                        <button onClick={() => {toggle(item.id)} }>Done</button>
                  ) : (
                        <button onClick={() => {toggle(item.id)}}>Undone</button>
                  )}
                  {item.name}
                  <button>Delete</button>
            </li>
      )
}