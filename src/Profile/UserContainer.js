import React from 'react';

const UserContainer = (props) => {
  if (props.user) {
  const { avatar, bio, favortie_genre, location, username } = props.user

  return (
    <div className="UserContainer five wide column">
      <img className="profileImg" src={avatar} alt="profile avatar"/><br/>
      <div className="profileInfos">
        <p className="info username">{username}</p>
        <p className="info infoOption">I live in</p>
        <p className="info">{location}</p>
        <p className="info">{bio}</p>
        <p className="info infoOption">Favorite Genre</p>
        <p className="info">{favortie_genre}</p>
      </div>
    </div>
  )} else {return null}
}

export default UserContainer