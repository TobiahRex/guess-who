import React from 'react';
import

class CharacterTable extends React.Component {
  render() {
    return (
      <table style="width:100%">
        {/* <tr>
          <th>Firstname</th>
        </tr> */}
        <tr>
          <td><img src={personTestAvatar1} /></td>
          <td><img src={personTestAvatar2} /></td>
          <td><img src={personTestAvatar3} /></td>
          <td><img src={personTestAvatar1} /></td>
          <td><img src={personTestAvatar2} /></td>
          <td><img src={personTestAvatar3} /></td>
          <td><img src={personTestAvatar1} /></td>
          <td><img src={personTestAvatar2} /></td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    )
  }
}
