import React from 'react'

const MyTable = () => {

  return (
    <div>
      <button type="button" class="btn btn-primary">Back</button>
      <table class="table">
        <tbody>
          <tr>
            <td>acceptRules</td>
            <td>true</td>
          </tr>
          <tr>
            <td>address</td>
            <td>lenina street</td>
          </tr>
          <tr>
            <td>city</td>
            <td>moscow</td>
          </tr>
          <tr>
            <td>country</td>
            <td>russia</td>
          </tr>
          <tr>
            <td>email</td>
            <td>my@email.com</td>
          </tr>
          <tr>
            <td>password</td>
            <td>qwerty</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MyTable
