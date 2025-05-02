import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      <div>
        <div>
          <div className="definition"> {props.data.definition}</div>
          <div className="example"> {props.data.example}</div>
        </div>
        <Synonyms synonym={props.data.synonyms} />
      </div>
    </div>
  );
}
