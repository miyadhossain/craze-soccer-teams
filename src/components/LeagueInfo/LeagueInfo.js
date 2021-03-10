import React from "react";
import CountryImg from "../../Icon/country.png";
import SportImg from "../../Icon/football.png";
import FoundImg from "../../Icon/found.png";
import GenderIcon from "../../Icon/male-gender.png";
import FemaleImg from "../../images/female.png";
import MaleImg from "../../images/male.png";
import LeagueInfoDetail from "../LeagueInfoDetail/LeagueInfoDetail";
import SocialLink from "../SocialLink/SocialLink";
import "./LeagueInfo.css";

const LeagueInfo = (props) => {
  //   console.log(props);
  const {
    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
  } = props.leagueInfo;
  return (
    <div className="">
      <div className="row bg-primary leagueDiv mt-3 align-items-center">
        <div className="col-md-6 justify-content-center text-white">
          <h4>{strLeague}</h4>
          <p>
            <span>
              <img className="icon" src={FoundImg} alt="" />
            </span>
            Founded: {intFormedYear}
          </p>
          <p>
            <span>
              <img className="icon" src={CountryImg} alt="" />
            </span>
            Country: {strCountry}
          </p>
          <p>
            <span>
              <img className="icon" src={SportImg} alt="" />
            </span>
            Sport Type: {strSport}
          </p>
          <p>
            <span>
              <img className="icon" src={GenderIcon} alt="" />
            </span>
            Gender: {strGender}
          </p>
        </div>
        <div className="col-md-6 justify-content-center">
          {strGender === "Male" ? (
            <img className="img-thumbnail" src={MaleImg} alt="" />
          ) : (
            <img className="img-thumbnail" src={FemaleImg} alt="" />
          )}
        </div>
      </div>
      <div className="mt-3">
        <LeagueInfoDetail />
      </div>
      <SocialLink />
    </div>
  );
};

export default LeagueInfo;
