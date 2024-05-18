function Element(props) {
      return (
            <>
                  <p>{props.content}</p>
                  <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6</li>
                  </ul>
            </>
      );
}

ReactDOM.render(
      <Element content="A React Component" />,
      document.getElementById("app")
);
