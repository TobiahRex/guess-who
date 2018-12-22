import React from 'react';
import personTestAvatar1 from '../assets/images/guess-who-alex.JPG';
import personTestAvatar2 from '../assets/images/guess-who-joe.JPG';
import personTestAvatar3 from '../assets/images/guess-who-maria.JPG';



class CharacterTable extends React.Component {
  renderImages = (avatarCollec) => {
    for (let i = 8; i > 0; i--) {
      return (
        <img src={avatarCollec[i]} alt={`Character ${i - 1}`} class="board-avatar" />
      )
    }
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
      <tr>
        <td class="avatar-boundry" align="middle">
          <div class="board-avatar-container">
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
            <img src={personTestAvatar3} alt="Character 3" class="board-avatar" />
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
            <img src={personTestAvatar3} alt="Character 3" class="board-avatar" />
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="avatar-boundry" align="middle">
          <div class="board-avatar-container">
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
            <img src={personTestAvatar3} alt="Character 3" class="board-avatar" />
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
            <img src={personTestAvatar3} alt="Character 3" class="board-avatar" />
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="avatar-boundry" align="middle">
          <div class="board-avatar-container">
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
            <img src={personTestAvatar3} alt="Character 3" class="board-avatar" />
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
            <img src={personTestAvatar3} alt="Character 3" class="board-avatar" />
            <img src={personTestAvatar1} alt="Character 1" class="board-avatar" />
            <img src={personTestAvatar2} alt="Character 2" class="board-avatar" />
          </div>
        </td>
      </tr>
    </table>
  )
}
}

export default CharacterTable;
