import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      <div>
        <p>
          {props.data.definition}
          <br />
          <em>{props.data.example}</em>
        </p>
      </div>
    </div>
  );
}
