import React from 'react'
import './Mobile.scss'

function Mobile() {
  return (
    <div className='mobile-container'>
        <div className='mobile-dark'></div>
        <div className='mobile-light'></div>
        <div className='mobile-absolute'></div>
        <div className='mobile-content'>
            <div className='content-left'>
                <h2>SMART WAREHOUSE <span>Mobile</span></h2>
                <p>Online opening of deposits control of savings and savings, accrued overtime</p>
                <p>You can view your card history, cash receipts and control your expenses</p>
                <p>Opening and monitoring online deposits</p>
                <p>Monitoring payments</p>
                <p>Transfer of funds from card to another card within a few minutes</p>
                <p>Murabaha line check and debt repayment</p>
                <p>Money Transfers and Online Conversions</p>
                <div className='content-left-buttons'>
                    <button className='button-left'>
                        <img src={require('../../../assets/icons/play-market.png')} />
                        Google play
                    </button>
                    <button className='button-right'>
                        <img src={require('../../../assets/icons/app-store.png')} />
                        App store
                    </button>
                </div>
            </div>
            <div className='content-right'>
                <h1>MOBILE</h1>
                <img src={require('../../../assets/images/mobile.webp')} />
                <h2>SMART WAREHOUSE</h2>
            </div>
        </div>
    </div>
  )
}

export default Mobile