import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Leagues from "../Leagues/Leagues";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues));
  }, []);
  const first15 = leagues.slice(0, 12);
  return (
    <div>
      <Header />
      <div className="row ">
        <div className="col-md-12 justify-content-center">
          <div className="row justify-content-center">
            {first15.map((league) => (
              <Leagues key={league.idLeague} league={league}></Leagues>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
