import Css5 from './block5.css'
import Klub from '../../image/klub.png'

const Card2 = ({data2}) => {
    switch (data2.color) {
        case null:
            return(
                <div className='card5' style={{backgroundImage: `url(${data2.img})`}}>
                    <h3>{data2.title}</h3>
                </div>
            )
        default:
            return (
                <div className='card5' style={{background: data2.color}}>
                    <h3>{data2.title}</h3>
                </div>
            )
    }
}

export const Block5 = () => {

    const data2 = [
        {
            title: 'Physical Health',
            color: '#22356F',
            id: 1
        },
        {
            title: 'Mental Health',
            color: '#0052C1',
            id: 2
        },
        {
            title: 'Nutrition',
            color: null,
            img: Klub,
            id: 3
        },
        {
            title: 'Gymnastics',
            color: '#62D0DF',
            id: 4
        },
        {
            title: 'Crossfit',
            color: '#DEE1FF',
            id: 5
        },
        {
            title: 'Aerobics',
            color: '#8F00FF',
            id: 6
        }
    ]

    return (
       <div className='div5'>
           {
               data2.map((el, id) => {
              return <Card2 data2={el} key={id} />
               })
           }
       </div>
    )
}