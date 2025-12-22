import 'remixicon/fonts/remixicon.css'

const Card = (props) => {
    
  return (
    <div style={{ backgroundImage: `url("${props.img}")` }} className="bg-cover bg-center flex flex-col justify-between w-80 h-96 rounded-4xl px-7 py-5">
        <h3 className='bg-white h-10 w-10 flex justify-center items-center rounded-full'>{props.count}</h3>
        <div className="flex flex-col gap-5">
            <p className="text-white text-shadow-2xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem vel enim quam impedit reiciendis.</p>
            <div style={{backgroundColor:props.btcolor}} className=' rounded-4xl text-2xl flex justify-between px-3'>
              <button>{props.button1}</button>
              <button><i className="ri-arrow-right-long-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Card