import React, { useRef, useState } from 'react'
import MyTable from './MyTable'

const MyForm = () => {

  const [emailData, setEmailData] = useState('')
  const [passwData, setPasswData] = useState('')
  const [adrrData, setAdrrData] = useState('')
  const [cityData, setCityData] = useState('')
  const [countryData, setCountryData] = useState('')
  const [isChecked, setisChecked] = useState(false)
  const [visible, setVisible] = useState(false)

  const onEmailChange = (e) => {
    setEmailData(e.target.value);
  }
  const onPasswChange = (e) => {
    setPasswData(e.target.value);
  }
  const onAddrChange = (e) => {
    setAdrrData(e.target.value);
  }
  const onCityChange = (e) => {
    setCityData(e.target.value);
  }
  const onCountryChange = (e) => {
    setCountryData(e.target.value);
  }
  const onCheckboxChange = (e) => {
    setisChecked(!isChecked);
  }
  
  const submitForm = (e) => {
    e.preventDefault()
    setVisible( !visible )
  }
  const hideTable = () => {
    setVisible( !visible )
  } 

  // const userData = [
  //   {country: countryData},
  //   {acceptRules: isChecked.toString()},
  //   {address: adrrData},
  //   {password: passwData},
  //   {city: cityData},
  //   {email: emailData},
  // ]
  const userData = [
    { key: 'country' ,
      val: countryData
    },
    { key: 'acceptRules' ,
      val: isChecked.toString()
    },
    { key: 'address' ,
      val: adrrData
    },
    { key: 'password' ,
      val: passwData
    },
    { key: 'city' ,
      val: cityData
    },
    { key: 'email' ,
      val: emailData
    },
  
  ]
  
  return (
    <>
      <form onSubmit={submitForm} className={visible ? 'hidden' : 'revealed'} style={{width: 600}} name="myForm">
        <div class="col-md-6 mb-3">
            <label for="email" class="col-form-label">Email</label>
            <input onChange={onEmailChange} type="email" name="email" class="form-control" id="email" placeholder="Email"></input>
          </div>
          <div class="form-group col-md-6">
            <label for="password" class="col-form-label">Password</label>
            <input onChange={onPasswChange} type="password" name="password" class="form-control" id="password" placeholder="Password"></input>
          </div>
        <div class="col-md-6 mb-3">
          <label for="address" class="col-form-label">Address</label>
          <textarea onChange={onAddrChange} type="text" class="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <label for="city" class="col-form-label">City</label>
            <input onChange={onCityChange} type="text" class="form-control" name="city" id="city"></input>
          </div>
          <div class="col-md-6 mb-3">
            <label for="country" class="col-form-label">Country</label>
            <select value={countryData} onChange={onCountryChange}  id="country" name="country" class="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        <div class="col-md-6 mb-3">
          <div class="form-check">
            <label class="form-check-label" for="rules">
              <input checked={isChecked} onChange={onCheckboxChange} id="rules" type="checkbox" name="acceptRules" class="form-check-input"></input>
              Accept Rules
            </label>
          </div>
        </div>
        <button  type="submit" class="btn btn-primary">Sign in</button>
      </form>

      <div className={!visible ? 'hidden' : 'revealed'}>
      <button onClick={hideTable} type="button" className="btn btn-primary">Back</button>
      <table className="table">
        <tbody>
          {userData.sort( (a,b) => a.key > b.key ? 1 : -1 ).map( item => {
            return(
              <tr>
                <td>{item.key}</td>
                <td>{item.val}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MyForm



// console.log('Email: ' + emailData);
// console.log('Password: ' + passwData);
// console.log('Adress: ' + adrrData);
// console.log('City: ' + cityData);
// console.log('Country: ' + countryData);
// console.log(isChecked);