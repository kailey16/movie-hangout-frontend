import React from 'react';

const UserContainer = (props) => {
  if (props.user) {
  const { avatar, bio, favortie_genre, location, username } = props.user

  return (
    <div className="UserContainer five wide column">
      <img className="ui medium circular image" src={avatar} alt="profile avatar"/><br/>
      <p>{username}</p><br/>
      <p>{location}</p>
      <p>{bio}</p>
      <p>My favorite genre is: {favortie_genre}</p>
    </div>
  )} else {return null}
}

export default UserContainer