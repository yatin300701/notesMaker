import React from "react";
import "../styles/noteitem.css";

export default function NoteItem(props) {
  function handleedit(e) {
    props.txt(props.itm);
    const newArr = props.item.filter((ele) => {
      return ele !== props.itm;
    });
    props.nts(newArr);
  }
  function handledel(e) {
    props.txt("");
    const newArr = props.item.filter((ele) => {
      return ele !== props.itm;
    });
    props.nts(newArr);
  }
  return (
    <>
      <div className="listItem">
        <span className="written-notes">{props.itm}</span>

        <span className="editItem">
          <button className="edit" onClick={handleedit}>
            Edit
          </button>
          <button className="del" onClick={handledel}>
            Del
          </button>
        </span>
      </div>
    </>
  );
}
