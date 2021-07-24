import Css6 from './block6.css'

const Card3 = ({data3}) => {
    if (data3.text) {
        return (
                <div className='card6'>
                <h2 className='h26'>{data3.title}</h2>
                <p className='p6'>{data3.text}</p>
            </div>
        )
    }else {
        return;
    }
}

export const Block6 = () => {

   const data3 = [
       {
           title: 'Nutritional Plans',
           text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
           id: 1
       },
       {
        title: 'Weight Loss',
        text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id: 2
    },
    {
        title: 'Mental Peace',
        text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id: 3
    },
    {
        title: 'Home Training',
        text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id: 4
    },
    {
        title: 'Work/Life Balance',
        text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id:5
    },
    {
        title: 'Cardio',
        text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id: 6
    }
   ]

    return(
       <div className='div6'>
           {
               data3.map((el, id) => {
                   return <Card3  data3={el} key={id} />
               })
           }
       </div>
    )
}