import { Link } from "react-router-dom";
import { useState } from "react";
const { pages, updatePages } = require("./data");

function Pages() {
  let [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [refresh, setrefresh] = useState(false);
  function handleClick(e) {
    e.preventDefault();

    name = name.toLowerCase();
    updatePages(name, email);
    console.log(pages);
    setrefresh(!refresh);
  }
  return (
    <div>
      {pages.map((page) => (
        <h1 key={page.name}>
          <Link to={`/pages/${page.name}`}>{page.name}</Link>
        </h1>
      ))}
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Pages;
