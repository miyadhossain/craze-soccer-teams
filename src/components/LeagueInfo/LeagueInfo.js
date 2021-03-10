import React from "react";
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
    <div>
      <h4>{strLeague}</h4>
      <p>Founded: {intFormedYear}</p>
      <p>Country: {strCountry}</p>
      <p>Sport Type: {strSport}</p>
      <p>Gender: {strGender}</p>
      <button></button>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam
          quam quae cumque, ipsum animi enim voluptatibus consequatur excepturi
          facere voluptas cum ex facilis rem natus corporis assumenda sint
          necessitatibus? Quibusdam animi adipisci sit aliquid earum est
          cupiditate, eos itaque minima, vel dolor facilis dignissimos et
          aspernatur odio modi, placeat reprehenderit molestias. Natus
          distinctio sapiente esse culpa non est commodi? Reiciendis voluptatem
          rem laudantium cumque est aperiam rerum, quam debitis, ipsam deleniti
          illo maxime dolorem expedita? Odit, quas quae nemo fuga atque
          voluptates sequi tempora nostrum? Nobis autem commodi impedit
          reiciendis deserunt alias harum! Porro aut mollitia aliquam a!
          Reprehenderit.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam
          quam quae cumque, ipsum animi enim voluptatibus consequatur excepturi
          facere voluptas cum ex facilis rem natus corporis assumenda sint
          necessitatibus? Quibusdam animi adipisci sit aliquid earum est
          cupiditate, eos itaque minima, vel dolor facilis dignissimos et
          aspernatur odio modi, placeat reprehenderit molestias. Natus
          distinctio sapiente esse culpa non est commodi? Reiciendis voluptatem
          rem laudantium cumque est aperiam rerum, quam debitis, ipsam deleniti
          illo maxime dolorem expedita? Odit, quas quae nemo fuga atque
          voluptates sequi tempora nostrum? Nobis autem commodi impedit
          reiciendis deserunt alias harum! Porro aut mollitia aliquam a!
          Reprehenderit.
        </p>
      </div>
      <p></p>
    </div>
  );
};

export default LeagueInfo;
