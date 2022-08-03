import React from 'react'
import './SignUpForm.scss'
import {RiCloseLine} from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'

function SignUpForm() {
  return (
    <div className='sign-up'>
        <div className='sign-up-header'>
            <h1>Sign Up</h1>
            <RiCloseLine className='sign-up-header-icon'/>
        </div>
    <form className='sign-up-form'>
        <label><span>*</span>F.SH.I</label>
        <input required placeholder='Ism' className='sign-up-form-input' type='text' />
        <div className='row'> 
            <div className='inputs'>
                <label><span>*</span>Email</label>
                <input placeholder='Familiya' className='sign-up-form-input' type='email' />
                <label><span>*</span>Phone</label>
                <input placeholder='Telefon nomer' className='sign-up-form-input' type='text' />
            </div>
            <label htmlFor="photo">
                <span>*</span>Photo
                <input type="file" id="photo" />
                <div  className='file-input'>
                    <AiOutlinePlus className='file-input-icon'/>
                </div>
            </label>
        </div>
        <label><span>*</span>F.SH.I</label>
        <input required placeholder='Parol' className='sign-up-form-input' type='password' />
        <button type='submit'>Send</button>

    </form>
    </div>
  )
}

export default SignUpForm