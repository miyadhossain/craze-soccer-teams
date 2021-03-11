import React from "react";
import CountryImg from "../../Icon/country.png";
import SportImg from "../../Icon/football.png";
import FoundImg from "../../Icon/found.png";
import GenderIcon from "../../Icon/male-gender.png";
import FemaleImg from "../../images/female.png";
import MaleImg from "../../images/male.png";
import SocialLink from "../SocialLink/SocialLink";
import "./TeamInfo.css";

const TeamInfo = (props) => {
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
  } = props.teamInfo;
  return (
    <div>
      <div className="row bg-success teamDiv mt-3 align-items-center">
        <div className="col-md-6 justify-content-center text-white">
          <h4>{strTeam}</h4>
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
          {strGender === "Male" || "Female" ? (
            <img className="img-thumbnail" src={MaleImg} alt="" />
          ) : (
            <img className="img-thumbnail" src={FemaleImg} alt="" />
          )}
        </div>
      </div>
      <div className="mt-5 text-light">{strDescriptionEN}</div>
      <div className="mt-3">
        <SocialLink />
      </div>
    </div>
  );
};

export default TeamInfo;
