import React from 'react'
import Css from './block1.css'
import Boys1 from '../../image/boys.png'

export const Block1 = () => {
    return (
        <div className='container'>
           <div className='cont2'>
           <h4 className='h41'>Thrivetalk</h4>
            <div className='navbar'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <button className='btn1'>CONTACT US</button>
            </div>
            <div className="parent9">
                <div className="child1">
            <h3 className='h31'>Thrivetalk</h3>
            <div className='cont3'>
            <h1 className='h1'>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
            <p className='text1'>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression,
                 social anxiety, or even just caring for yourself more.</p>
            </div>
                 <button className='btn2'>WHO AM I</button>
                 <button className='btn3'>WHO AM I</button>
                 </div>
                 <div className="child2">
                     <img src={Boys1} alt="" />

                 </div>
           </div>
           </div>
           {/* <div>
           <img src={Boys1}></img>
           </div> */}
        </div>
    )
}