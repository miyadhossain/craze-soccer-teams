import React from "react";
import { useHistory } from "react-router";

const Leagues = (props) => {
  //   console.log(props);
  const { strLeague, strSport, idLeague } = props.league;
  const history = useHistory();
  const handleExplore = () => {
    const url = `league/${idLeague}`;
    history.push(url);
  };

  return (
    <div className="card" style={{ width: "18rem", margin: "30px" }}>
      <div className="card-body text-center">
        <h4>{strLeague}</h4>
        <p>Sports Type: {strSport}</p>
        <button onClick={handleExplore} className="btn btn-primary">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Leagues;
