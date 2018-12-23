import React from 'react';
import cardImg from '../assets/images/guess-who-back-card.png';
import avatars from './assets/character-avatars';
import { characterList } from './assets/character-list';

class CharacterTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCharacters: characterList,
      choice_feature: '',
    }
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

  handleFeatureChoice = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      choice_feature: value,
    }));
  }

  renderFeatureList = (list) => {
    return list.map((feature) => {
      let word = feature.split('_').map((word) => {
        let cap = word[0].toUpperCase();
        return `${cap}${word.slice(1)} `
      }).reduce((acc, next) => {
        acc += next;
        return acc;
      }, '');

      return (
        <li key={Buffer.from(word, 'utf8').toString('base64')}>
          <input type="radio" name="feature" value={feature} checked onClick={() => this.handleFeatureChoice(feature)} />
          {word}
        </li>
      )
    });
  }

  render() {
    console.log('this.state.choice_feature: ', this.state.choice_feature);
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
                  {this.renderFeatureList(
                    [
                      'rosey_cheeks',
                      'small_lips',
                      'butt_chin',
                      'dotted_chin',
                      'round_face',
                      'high_cheek_bones',
                      'facial_hair',
                      'beard',
                      'mustache',
                      'goatee',
                      'thin_mustache',
                      'big_nose',
                      'small_nose',
                    ]
                  )}
                </ul>
              </td>
              <td>
                <ul>
                  {this.renderFeatureList(
                    [
                      'brown_hair',
                      'black_hair',
                      'blonde_hair',
                      'white_hair',
                      'red_hair',
                      'curly_hair',
                      'straight_hair',
                      'long_hair',
                      'short_hair',
                      'bald_hair',
                      'side_part',
                      'middle_part',
                    ]
                  )}
                </ul>
              </td>
              <td className="attribute-skin">
                <ul>
                  {this.renderFeatureList(
                    [
                      'white',
                      'not_white',
                      'rosey_cheeks',
                    ]
                  )}
                </ul>
              </td>
              <td className="attribute-eyes">
                <ul>
                  {this.renderFeatureList(
                    [
                      'brown_eyes',
                      'blue_eyes',
                      'thick_eye_brows',
                      'thin_eye_brows',
                    ]
                  )}
                </ul>
              </td>
              <td className="attribute-accessories">
                <ul>
                  {this.renderFeatureList(
                    [
                      'hat',
                      'earings',
                      'glasses'
                    ]
                  )}
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
