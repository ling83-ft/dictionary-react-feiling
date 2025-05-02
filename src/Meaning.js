import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let exampleDesc;
  if (props.data.example) {
    exampleDesc = <strong>Example: </strong>;
  }
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.data.definition}
          <br />
          {exampleDesc}
          <em>{props.data.example}</em>
          <Synonyms synonym={props.data.synonyms} />
        </p>
      </div>
    </div>
  );
}
