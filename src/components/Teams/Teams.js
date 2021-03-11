import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import "./Teams.css";

const Teams = (props) => {
  const { strTeamBadge, strTeam, strSport, idTeam } = props.team;

  const history = useHistory();
  const handleExplore = () => {
    const url = `team/${idTeam}`;
    history.push(url);
  };
  return (
    <div className="card" style={{ width: "18rem", margin: "30px" }}>
      <img
        className="badgeStyle mx-auto d-block"
        src={strTeamBadge}
        alt="team logo"
      />
      <div className="card-body text-center">
        <h4>{strTeam}</h4>
        <p>Sports Type: {strSport}</p>
        <button onClick={handleExplore} className="btn btn-success">
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Teams;
