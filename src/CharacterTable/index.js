import React from 'react';
import cardImg from '../assets/images/guess-who-back-card.png';
import avatars from './assets/character-avatars';
import { characterList } from './assets/character-list';

class CharacterTable extends React.Component {
  static state = {
    allCharacters: characterList,
    choice_feature: '',
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

  handleFeatureChoice = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      ...prevState,
      choice_feature: e.target.value,
    }));
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
                    <input type="radio" name="feature" value="rosey_cheeks" checked/> Rosey Cheeks
                  </li>
                  <li>
                    <input type="radio" name="feature" value="small_lips" checked/> Small Lips
                  </li>
                  <li>
                    <input type="radio" name="feature" value="butt_chin" checked/> Butt Chin
                  </li>
                  <li>
                    <input type="radio" name="feature" value="dotted_chin" checked/> Dotted Chin
                  </li>
                  <li>
                    <input type="radio" name="feature" value="roud_face" checked/> Round Face
                  </li>
                  <li>
                    <input type="radio" name="feature" value="high_cheek_bones" checked/> High Cheek Bones
                  </li>
                  <li>
                    <input type="radio" name="feature" value="facial_hair" checked/> Facial Hair
                  </li>
                  <li>
                    <input type="radio" name="feature" value="beard" checked/> Beard
                  </li>
                  <li>
                    <input type="radio" name="feature" value="mustache" checked/> Mustache
                  </li>
                  <li>
                    <input type="radio" name="feature" value="goatee" checked/> Goattee
                  </li>
                  <li>
                    <input type="radio" name="feature" value="thin_mustache" checked/> Thin Mustache
                  </li>
                  <li>
                    <input type="radio" name="feature" value="big_nose" checked/> Big nose
                  </li>
                  <li>
                    <input type="radio" name="feature" value="small_nose" checked/> Small Nose
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <input type="radio" name="feature" value="brown_hair" checked/> Brown
                  </li>
                  <li>
                    <input type="radio" name="feature" value="black_hair" checked/> Black
                  </li>
                  <li>
                    <input type="radio" name="feature" value="blonde_hair" checked/> Blonde
                  </li>
                  <li>
                    <input type="radio" name="feature" value="white_hair" checked/> White
                  </li>
                  <li>
                    <input type="radio" name="feature" value="red_hair" checked/> Red
                  </li>
                  <li>
                    <input type="radio" name="feature" value="curly_hair" checked/> Curly
                  </li>
                  <li>
                    <input type="radio" name="feature" value="straight_hair" checked/> Straight
                  </li>
                  <li>
                    <input type="radio" name="feature" value="long_hair" checked/> Long
                  </li>
                  <li>
                    <input type="radio" name="feature" value="short_hair" checked/> Short
                  </li>
                  <li>
                    <input type="radio" name="feature" value="bald_hair" checked/> Bald
                  </li>
                  <li>
                    <input type="radio" name="feature" value="side-part" checked/> Side Part
                  </li>
                  <li>
                    <input type="radio" name="feature" value="middle-part" checked/> Middle Part
                  </li>
                </ul>
              </td>
              <td className="attribute-skin">
                <ul>
                  <li>
                    <input type="radio" name="feature" value="white" checked/> White
                  </li>
                  <li>
                    <input type="radio" name="feature" value="rosey_cheeks" checked/> Not White
                  </li>
                </ul>
              </td>
              <td className="attribute-eyes">
                <ul>
                  <li>
                    <input type="radio" name="feature" value="brown_eyes" checked/> Brown
                  </li>
                  <li>
                    <input type="radio" name="feature" value="blue_eyes" checked/> Blue
                  </li>
                  <li>
                    <input type="radio" name="feature" value="thick_eye_brows" checked/> Thick Eye-Brows
                  </li>
                  <li>
                    <input type="radio" name="feature" value="thin_eye_brows" checked/> Thin Eye-Brows
                  </li>
                </ul>
              </td>
              <td className="attribute-accessories">
                <ul>
                  <li>
                    <input type="radio" name="feature" value="hat" checked/> Hat
                  </li>
                  <li>
                    <input type="radio" name="feature" value="earings" checked/> Earings
                  </li>
                  <li>
                    <input type="radio" name="feature" value="glasses" checked/> Glasses
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
