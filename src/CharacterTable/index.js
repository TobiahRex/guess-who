import React from 'react';
import cardImg from '../assets/images/guess-who-back-card.png';
import avatars from './assets/character-avatars';
import { characterList } from './assets/character-list';

class CharacterTable extends React.Component {
  static state = {
    allCharacters: characterList,
  }

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
                    <input type="radio" name="facial-feature" value="male" checked/> Rosey Cheeks
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Small Lips
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Butt Chin
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Dotted Chin
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Round Face
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> High Cheek Bones
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Facial Hair
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Beard
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Mustache
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Goattee
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Thin Mustache
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Big nose
                  </li>
                  <li>
                    <input type="radio" name="facial-feature" value="male" checked/> Small Nose
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <input type="radio" name="hair" value="brown" checked/> Brown
                  </li>
                  <li>
                    <input type="radio" name="hair" value="black" checked/> Black
                  </li>
                  <li>
                    <input type="radio" name="hair" value="blonde" checked/> Blonde
                  </li>
                  <li>
                    <input type="radio" name="hair" value="white" checked/> White
                  </li>
                  <li>
                    <input type="radio" name="hair" value="red" checked/> Red
                  </li>
                  <li>
                    <input type="radio" name="hair" value="curly" checked/> Curly
                  </li>
                  <li>
                    <input type="radio" name="hair" value="straight" checked/> Straight
                  </li>
                  <li>
                    <input type="radio" name="hair" value="long" checked/> Long
                  </li>
                  <li>
                    <input type="radio" name="hair" value="short" checked/> Short
                  </li>
                  <li>
                    <input type="radio" name="hair" value="bald" checked/> Bald
                  </li>
                  <li>
                    <input type="radio" name="hair" value="side-part" checked/> Side Part
                  </li>
                  <li>
                    <input type="radio" name="hair" value="middle-part" checked/> Middle Part
                  </li>
                </ul>
              </td>
              <td className="attribute-skin">
                <ul>
                  <li>
                    <input type="radio" name="skin" value="white" checked/> White
                  </li>
                  <li>
                    <input type="radio" name="skin" value="not-white" checked/> Not White
                  </li>
                </ul>
              </td>
              <td className="attribute-eyes">
                <ul>
                  <li>
                    <input type="radio" name="eyes" value="brown" checked/> Brown
                  </li>
                  <li>
                    <input type="radio" name="eyes" value="blue" checked/> Blue
                  </li>
                  <li>
                    <input type="radio" name="eyes" value="thick-eye-brows" checked/> Thick Eye-Brows
                  </li>
                  <li>
                    <input type="radio" name="eyes" value="thin-eye-brows" checked/> Thin Eye-Brows
                  </li>
                </ul>
              </td>
              <td className="attribute-accessories">
                <ul>
                  <li>
                    <input type="radio" name="accessories" value="hat" checked/> Hat
                  </li>
                  <li>
                    <input type="radio" name="accessories" value="earings" checked/> Earings
                  </li>
                  <li>
                    <input type="radio" name="accessories" value="glasses" checked/> Glasses
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
