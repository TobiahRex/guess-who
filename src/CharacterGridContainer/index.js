import React from 'react';
import avatars from './assets/character-avatars';

class CharacterGrid extends React.Component {
  renderImages = (avatarCollec) => {
    let results = [],
    avatars = avatarCollec.slice(0);

    for (let i = 8; i > 0; i--) {
      results.push(
        <img key={`${i + 1}`} src={avatars.splice(Math.floor(Math.random() * (avatars.length - 1)), 1)} alt={`Character ${i - 1}`} className="board-avatar" />
      )
    }
    return results;
  }

  render() {
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
