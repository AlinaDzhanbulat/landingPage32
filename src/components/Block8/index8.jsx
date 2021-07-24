import Css8 from './block8.css'
import Boy8 from '../../image/blackboy.png'

export const Block8 = () => {
    return (
        <div className='div8'>
            <div className='div88'>
                <h4 className='h48'>YOU SHOULD ALSO KNOW</h4>
                <div className='divtext8'>
                    <h1 className='h18'>Ready. Set. Smile</h1>
                <p className='p8'>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
                </div>
                     <button className='btn8'>GET HELP NOW</button>
            </div>
            <div>
           <img src={Boy8}></img>
            </div>
        </div>
    )
}
