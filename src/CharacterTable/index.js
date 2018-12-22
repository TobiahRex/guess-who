import React from 'react';
import personTestAvatar1 from '../assets/images/guess-who-alex.JPG';
import personTestAvatar2 from '../assets/images/guess-who-joe.JPG';
import personTestAvatar3 from '../assets/images/guess-who-maria.JPG';



class CharacterTable extends React.Component {
  renderImages = (avatarCollec) => {
    let results = [];

    for (let i = 8; i > 0; i--) {
      results.push(
        <img key={`${i + 1}`} src={avatarCollec[Math.floor(Math.random() * 3)]} alt={`Character ${i - 1}`} className="board-avatar" />
      )
    }

    return results;
  }

  render() {
    let avatars = [
      personTestAvatar1,
      personTestAvatar2,
      personTestAvatar3
    ];


    return (
      <table style={
        {
          width: '100%'
        }
      }>
      {/* <tr>
        <th>Firstname</th>
      </tr> */}
      <tbody>
        <tr>
          <td className="avatar-boundry" align="middle">
            <div className="board-avatar-container">
              {
                this.renderImages(avatars)
              }
            </div>
          </td>
        </tr>
        <tr>
          <td className="avatar-boundry" align="middle">
            <div className="board-avatar-container">
              {this.renderImages(avatars)}
            </div>
          </td>
        </tr>
        <tr>
          <td className="avatar-boundry" align="middle">
            <div className="board-avatar-container">
              {this.renderImages(avatars)}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
}

export default CharacterTable;
