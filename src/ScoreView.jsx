import React from "react";
import "./ScoreView.css";

const ScoreView = (props) => {
  return (
    <div class={`score-view-wrapper-leading-${props.leading}`}>
      <h2>
        {props.teamName}: {props.score}
      </h2>
    </div>
  );
};

export default ScoreView;
