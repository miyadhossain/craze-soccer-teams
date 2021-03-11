import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TeamInfo from "../TeamInfo/TeamInfo";
import "./TeamsDetail.css";

const TeamsDetail = () => {
  const { teamId } = useParams();
  const [teamInfo, setTeamInfo] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamInfo(data.teams[0]));
  }, [teamId]);
  return (
    <div className="backgroundStyle">
      <div className="row banner">
        <img
          className="badgeStyle mx-auto d-block"
          src={teamInfo.strTeamBadge}
          alt=""
        />
      </div>
      <div className="container">
        <TeamInfo teamInfo={teamInfo}></TeamInfo>
      </div>
    </div>
  );
};

export default TeamsDetail;
