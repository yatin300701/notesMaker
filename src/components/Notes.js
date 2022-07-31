import { React, useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import "../styles/notes.css";

export default function Notes() {
  const [notes, setnotes] = useState([]);
  const [text, settext] = useState("");

  function handleClick() {
    if (text === "") {
      alert("type something");
      return;
    }
    setnotes((oldnotes) => [...oldnotes, text]);
    settext(() => "");
  }
  useEffect(() => {
    // cp
  });
  return (
    <>
      <div className="container">
        <div className="container-top">
          <input
            type="text"
            name="helo"
            value={text}
            onChange={(e) => settext(e.target.value)}
            id=""
          />
          <button className="btn-text" onClick={handleClick}>
            Add
          </button>
        </div>
        <div className="container-bottom">
          {notes.map((e) => {
            return (
              <li className="list" key={e}>
                <NoteItem itm={e} nts={setnotes} txt={settext} item={notes} />
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}
