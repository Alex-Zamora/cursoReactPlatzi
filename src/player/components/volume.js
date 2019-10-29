import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import MuteIcon from '../../icons/components/mute';
import './volume.css';

function Volume(props) {
  // {
  //   console.log(props);
  // }
  return (
    <button className="Volume">
      <div className="wrapper-btn-volume" onClick={props.handleVolumeClick}>
        {
          props.mute ?
            <VolumeIcon 
              color="white"
              size={25} 
            />
          :
            <MuteIcon 
              color="white"
              size={25}
            />
        }
      </div>
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume;
