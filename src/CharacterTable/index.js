import React from 'react';
import avatars from './character-avatars';

class CharacterTable extends React.Component {
  renderImages = (avatarCollec) => {
    let results = [];

    for (let i = 8; i > 0; i--) {
      results.push(
        <img key={`${i + 1}`} src={avatarCollec.splice(Math.floor(Math.random() * (avatarCollec.length - 1)), 1)} alt={`Character ${i - 1}`} className="board-avatar" />
      )
    }

    return results;
  }

  render() {
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

          <table id="attribute-table" style={{ width: '100%' }}>
            <tr>
              <th>Facial Attributes</th>
              <th>Hair</th>
              <th>Skin</th>
              <th>Eye</th>
              <th>Accessories</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Rosey Cheeks
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Small Lips
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Butt Chin
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Dotted Chin
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Round Face
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> High Cheek Bones
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Facial Hair
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Beard
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Mustache
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Goattee
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Thin Mustache
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Big nose
                  </li>
                  <li>
                    <input type="radio" name="gender" value="male" checked/> Small Nose
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <input type="radio" value="Brown" /> Brown
                  </li>
                  <li>
                    <input type="radio" value="Black" /> Black
                  </li>
                  <li>
                    <input type="radio" value="Blonde" /> Blonde
                  </li>
                  <li>
                    <input type="radio" value="White" /> White
                  </li>
                  <li>
                    <input type="radio" value="Red" /> Red
                  </li>
                  <li>
                    <input type="radio" value="Curly" /> Curly
                  </li>
                  <li>
                    <input type="radio" value="Straight" /> Straight
                  </li>
                  <li>
                    <input type="radio" value="Long" /> Long
                  </li>
                  <li>
                    <input type="radio" value="Short" /> Short
                  </li>
                  <li>
                    <input type="radio" value="Bald" /> Bald
                  </li>
                  <li>
                    <input type="radio" value="Side Part" /> Side Part
                  </li>
                  <li>
                    <input type="radio" value="Middle Part" /> Middle Part
                  </li>
                </ul>
              </td>
              <td className="attribute-skin">
                <ul>
                  <li>
                    <input type="radio" value="white" /> White
                  </li>
                  <li>
                    <input type="radio" value="not-white" /> Not-White
                  </li>
                </ul>
              </td>
              <td className="attribute-eyes">
                <ul>
                  <li>
                    <input type="radio" value="Brown" /> Brown
                  </li>
                  <li>
                    <input type="radio" value="Blue" /> Blue
                  </li>
                  <li>
                    <input type="radio" value="Thick Eye Brows" /> Thick Eye Brows
                  </li>
                  <li>
                    <input type="radio" value="Thin Eye Brows" /> Thin Eye Brows
                  </li>
                </ul>
              </td>
              <td className="attribute-accessories">
                <ul>
                  <li>
                    <input type="radio" value="hat" /> Hat
                  </li>
                  <li>
                    <input type="radio" value="earings" /> Earings
                  </li>
                  <li>
                    <input type="radio" value="glasses" /> Glasses
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <button type="button" onClick={() => console.log('Submit')}> Submit</button>
        </div>
      </div>
    </div>
  )
}
}

export default CharacterTable;
