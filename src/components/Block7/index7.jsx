import Css7 from './block7.css'
import pic3 from '../../image/yellow.png'

export const Block7 = () => {
    return (
        <div className='div7'>
            <div>
           <img src={pic3}></img>
            </div>
            <div>
                <h4 className='h47'>YOU SHOULD ALSO KNOW</h4>
                <div className='divtext7'>
                <p className='p7'>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S.
                     population age 18 and older in a given year. We at <b className='b7'>ThriveTalk</b> can help you.</p>
                </div>
                     <button className='btn7'>GET HELP NOW</button>
            </div>
        </div>
    )
}