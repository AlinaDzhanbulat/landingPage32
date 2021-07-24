import Css9 from './block9.css'
import Girl9 from '../../image/flower.png'

const Cards8 = (props) => { 
    return (
        <div /*className={props.class}*/ className='div9'>
            <h3 className='h38'>{props.title}</h3>
            <p className='p8'>{props.text}</p>
        </div>
    )
}

export const Block9 = () => {
    const data4 = [
        {
            title: null,
            text: null,
            img: {Girl9},
            id: 1,
            class: "card1"
        },
        {
            title: 'SOME INFO',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
            id: 2,
            class: "card2"
        },
        {
            title: 'ENFOLD HEALTH',
            text: 'Main Street 1, Olcott Buffalo, United States +555 283 784 333 office@enfold-health.com',
            id: 3,
            class: "card3"
        },
        {
            title: 'OFFICE HOURS',
            text: 'Mo-Fr: 8:00-19:00 Sa: 8:00-14:00 Su: closed',
            id: 4,
            class: "card4"
        }
    ]
    let data4Elements = data4.map((el) => {
        return(
        <Cards8 title ={el.title} text={el.text } class={el.class}/>
        )
    })
    return(
        <div className="parent8">
            <div className="img8">
                <img src={Girl9} alt="" />
            </div >
            <div className="text8">{data4Elements}</div>
        </div>
    )
}