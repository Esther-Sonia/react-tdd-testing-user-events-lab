import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleCheckboxChange(e) {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Portfolio part */}
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Form */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.coding}
            onChange={handleCheckboxChange}
          />
          Coding
        </label>

        <label>
          <input
            type="checkbox"
            name="design"
            checked={interests.design}
            onChange={handleCheckboxChange}
          />
          Design
        </label>

        <label>
          <input
            type="checkbox"
            name="marketing"
            checked={interests.marketing}
            onChange={handleCheckboxChange}
          />
          Marketing
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Form submitted!</p>}
    </main>
  );
}

export default App;
