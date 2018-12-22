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
      <div>
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
      <div className="guess-type-container">
        <select name="guess-type">
          <option value="attribute">Is your person: </option>
          <option value="person">Does Your Person have: </option>
        </select>
      </div>
      <div className="guess-options-container">
        <div className="guess-options">
          {/* <input type="radio" name="gender" value="male" checked> Male<br> */}
          <input type="radio" name="facial-attribute" value="facial-attribute"/> Facial Attribute
          <input type="radio" name="hair" value="hair"/> Hair
          <input type="radio" name="eyes" value="eyes"/> Eyes
          <input type="radio" name="Skin" value="skin"/> Skin
          <input type="radio" name="Accessories" value="accessories"/> Skin
        </div>
      </div>
    </div>
  )
}
}

export default CharacterTable;
