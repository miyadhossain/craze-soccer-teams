import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LeagueInfo from "../LeagueInfo/LeagueInfo";
import "./LeaguesDetail.css";

const LeaguesDetail = () => {
  const { leagueId } = useParams();
  const [leagueInfo, setLeagueInfo] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueInfo(data.leagues[0]));
  }, [leagueId]);
  return (
    <div className="">
      <div className="row banner">
        <img
          className="badgeStyle mx-auto d-block"
          src={leagueInfo.strBadge}
          alt=""
        />
      </div>
      <div className="container">
        <LeagueInfo leagueInfo={leagueInfo}></LeagueInfo>
      </div>
    </div>
  );
};

export default LeaguesDetail;
