import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <div>{props.results.phonetic}</div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning data={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
