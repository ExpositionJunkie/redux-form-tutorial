import React, { useState } from "react";
import "./App.css";

const DATA = [
  { title: "my first note", description: "get milk" },
  { title: "my second note", description: "get peppers" },
];

function App() {
  const [notes, setNotes] = useState(DATA);
  const [form, setForm] = useState({ title: "", description: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, form]);
    setForm({ title: "", description: "" });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="title"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>

      <div>
        {notes.map((note, index) => (
          <React.Fragment key={index}>
            <div>{note.title}</div>
            <div>{note.description}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
