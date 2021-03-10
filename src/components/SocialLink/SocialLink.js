import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SocialLink.css";

const SocialLink = () => {
  const { leagueId } = useParams();
  const [link, setLink] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLink(data.leagues[0]));
  }, [leagueId]);
  return (
    // <div class="social-container">
    //   <h3>Social Follow</h3>
    //   <a href={`https://${link.strTwitter}`} className="twitter social">
    //     <FontAwesomeIcon icon={faTwitter} size="2x" />
    //   </a>
    //   <a href={`https://${link.strFacebook}`} className="facebook social">
    //     <FontAwesomeIcon icon={faFacebook} size="2x" />
    //   </a>
    //   <a href={`https://${link.strYoutube}`} className="youtube social">
    //     <FontAwesomeIcon icon={faYoutube} size="2x" />
    //   </a>
    // </div>

    <div className="text-center">
      <a
        className="social text-primary m-2"
        target="_blank"
        rel="noreferrer"
        href={`https://${link.strTwitter}`}
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        className="social text-primary m-2"
        target="_blank"
        rel="noreferrer"
        href={`https://${link.strFacebook}`}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        className="social text-danger m-2"
        target="_blank"
        rel="noreferrer"
        href={`https://${link.strYoutube}`}
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </div>
  );
};

export default SocialLink;
