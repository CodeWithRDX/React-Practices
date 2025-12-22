import Card from './Card';
const RightSide = ({users}) => {

  return (
    <div className='w-2/3 p-5 flex flex-nowrap gap-5'>
        {users.map((prop,idx)=>{
            return <Card id={idx} count={idx+1} button1={prop.button1} img={prop.img} btcolor={prop.btcolor}/>
        })}
    </div>
  )
}

export default RightSide