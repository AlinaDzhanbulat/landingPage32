import Css4 from './block4.css'

const Card1 = ({data}) => {
        if (data.color) {
            return (
                    <div className='card4' style={{background: data.color}}>
                    <h2>{data.title}</h2>
                </div>
            )
        }else {
            return;
        }
}

export const Block4 = () => {

    const data = [
        {
            title: 'Weight Lifting',
            color: '#FFE2DE',
            id: 1
        },
        {
            title: 'Running & Spinning',
            color: '#C4E769',
            id: 2
        },
        {
            title: 'Pumping Iron',
            color: '#62D0DF',
            id: 3
        },
        {
            title: 'Pumping Iron',
            color: '#0052C1',
            id: 4
        }
    ]

    return (
       <div className='app'>
           {
               data.map((el,id) => {
                   return <Card1 data={el} key={id} />
               })
           }
       </div>
    )
}