import Css2 from './block2.css'
import Girl from '../../image/girl.png'

export const Block2 = () => {
    return (
        <div className='cont22'>
            <div className='cont23'>
                <h1 className='h11'>Why Thrive?</h1>
                <p className='p11'>Want to improve your well-being from the comfort of your own couch? Are you having trouble 
                    finding the right therapist?  Here at ThriveTalk, our licensed therapists provide the same quality 
                    care you would get in office from anywhere you can access your laptop or mobile phone. Become your best 
                    self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
            </div>
            <div>
                <img src={Girl}></img>
            </div>
        </div>
    )
}