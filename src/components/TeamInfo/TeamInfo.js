import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountryImg from "../../Icon/country.png";
import SportImg from "../../Icon/football.png";
import FoundImg from "../../Icon/found.png";
import GenderIcon from "../../Icon/male-gender.png";
import FemaleImg from "../../images/female.png";
import MaleImg from "../../images/male.png";
import "./TeamInfo.css";

const TeamInfo = (props) => {
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strTwitter,
    strFacebook,
    strYoutube,
  } = props.teamInfo;

  return (
    <div>
      {/* Team info div */}
      <div className="row bg-success teamDiv mt-4 align-items-center">
        <div className="col-md-6 justify-content-center text-white">
          <h4>{strTeam}</h4>
          <p>
            <span>
              <img className="icon" src={FoundImg} alt="" />
            </span>
            Founded: {intFormedYear} years
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
          {strGender &&
            (strGender === "Male" ? (
              <img className="img-thumbnail" src={MaleImg} alt="" />
            ) : (
              <img className="img-thumbnail" src={FemaleImg} alt="" />
            ))}
        </div>
      </div>

      {/* Team info description */}
      <div className="mt-5 text-light">{strDescriptionEN}</div>

      {/* Social icons */}
      <div className="text-center mt-3">
        <a
          className="social text-primary m-2"
          target="_blank"
          rel="noreferrer"
          href={`https://${strTwitter}`}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          className="social text-primary m-2"
          target="_blank"
          rel="noreferrer"
          href={`https://${strFacebook}`}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          className="social text-danger m-2"
          target="_blank"
          rel="noreferrer"
          href={`https://${strYoutube}`}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default TeamInfo;
