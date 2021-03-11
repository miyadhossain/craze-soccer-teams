import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Teams from "../Teams/Teams";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  const first15 = teams.slice(0, 15);
  return (
    <div>
      <Header />
      <div className="row backgroundStyle">
        <div className="col-md-12 justify-content-center">
          <div className="row justify-content-center">
            {first15.map((team) => (
              <Teams key={team.idTeam} team={team}></Teams>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
