import React from 'react';

const UserContainer = (props) => {
  if (props.user) {
  const { avatar, bio, favortie_genre, location, username } = props.user

  return (
    <div className="UserContainer four wide column">
      <img className="profileImg" src={avatar} alt="profile avatar"/><br/>
      <p className="username">{username}</p>
      <p className="info">I live in <span className="infoContent">{location}</span></p>
      <p className="info">My favorite Genre is <span className="infoContent">{favortie_genre}</span></p>
      <p id="bio" className="info">{bio}</p>
    </div>
  )} else {return null}
}

export default UserContainer