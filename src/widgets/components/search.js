import React from "react";
import "./search.css";

// function Search(props) {
//     return (
//         <form action=""></form>
//     )
// }

const Search = props => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Busca tu video favorito"
      name="search"
      // defaultValue="Luis Fonsi"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
