import React from "react";
import Media from "./media.js";
import "./playlist.css";

function Playlist(props) {
  // const playlist = this.props.data.categories[0].playlist;
  // const categories = props.data.categories;
  // console.log(props.data);
  return (
    <div className="playlist">
      {props.playlist.map(item => {
        return (
          <Media {...item} key={item.id} handleClick={props.handleOpenModal} />
        );
      })}
    </div>
  );
}

export default Playlist;
