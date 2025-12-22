import LeftSide from "./LeftSide"
import RightSide from "./RightSide"


const Section1 = (props) => {
  return (
    <div className="flex gap-10 h-[80vh] w-full px-18 py-5">
        <LeftSide/>
        <RightSide users={props.users}/>
    </div>
  )
}

export default Section1