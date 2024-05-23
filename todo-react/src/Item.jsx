export default function Item({item, toggle, remove}){
      return (
            <li>
                  { item.done ? (
                        <button onClick={() => {toggle(item.id)} }>Done</button>
                  ) : (
                        <button onClick={() => {toggle(item.id)}}>Undone</button>
                  )}
                  {item.name}
                  <button onClick={() => remove(item.id)}>Delete</button>
            </li>
      )
}