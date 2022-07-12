import React from 'react'
import "./frontPage.css"

export default function FrontPage(props) {
  return (
    <div className='frontPageContainer'>
        <div className="frontPage">
            <div className="frontImageLeft">

            </div>
            <div className="frontPageMainText">
                <div className="frontText1">
                    {props.text1}
                </div>
                <div className="frontHeading">
                    {props.heading}
                </div>
                <div className="frontText2">
                    {props.text2}
                </div>
            </div>
        </div>
    </div>
  )
}
