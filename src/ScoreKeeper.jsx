import React, { useState } from "react";
import ScoreView from "./ScoreView";
import "./ScoreKeeper.css";

const ScoreKeeper = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);

  return (
    <div class="score-keeper-container">
      <h1 class="score-keeper-heading">Score Keeper</h1>
      <ScoreView leading={teamOneScore > teamTwoScore} teamName="Team One" score={teamOneScore} />
      <button class="score-keeper-button" onClick={() => setTeamOneScore(teamOneScore + 1)}>
        +1 Team One
      </button>

      <ScoreView leading={teamTwoScore > teamOneScore} teamName="Team Two" score={teamTwoScore} />
      <button class="score-keeper-button" onClick={() => setTeamTwoScore(teamTwoScore + 1)}>
        +1 Team Two
      </button>
    </div>
  );
};

export default ScoreKeeper;
