import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobprofiles = [
    {
      name: 'Amazon',
      img: 'https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg',
      time: '5 days ago',
      position: 'Senior UI/UX Designer',
      type: 'Part-Time',
      level: 'Senior Level',
      pay: '$120/hr',
      location: 'Mumbai, India'
    },
    {
      name: 'Google',
      img: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg',
      time: '2 weeks ago',
      position: 'Graphic Designer',
      type: 'Part-Time',
      level: 'Senior Level',
      pay: '$120/hr',
      location: 'Delhi, India'
    },
    {
      name: 'Apple',
      img: 'https://substack-post-media.s3.amazonaws.com/public/images/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
      time: '1 month ago',
      position: 'Senior UI/UX Designer',
      type: 'Full-Time',
      level: 'Flexible Schedule',
      pay: '$150/hr',
      location: 'Kochi, India'
    },
    {
      name: 'Airbnb',
      img: 'https://www.brandworkz.com/wp-content/uploads/2014/07/Airbnb-Logo.jpg',
      time: '1 month ago',
      position: 'UX Designer',
      type: 'Contract',
      level: 'Remote',
      pay: '$100/hr',
      location: 'Bangalore, India'
    },
    {
      name: 'Microsoft',
      img: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png',
      time: '3 days ago',
      position: 'Frontend Developer',
      type: 'Full-Time',
      level: 'Mid-Level',
      pay: '$130/hr',
      location: 'Hyderabad, India'
    },
    {
      name: 'Netflix',
      img: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
      time: '2 weeks ago',
      position: 'Product Designer',
      type: 'Contract',
      level: 'Senior Level',
      pay: '$140/hr',
      location: 'Pune, India'
    },
    {
      name: 'Adobe',
      img: 'https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg',
      time: '1 week ago',
      position: 'Creative Director',
      type: 'Full-Time',
      level: 'Senior Level',
      pay: '$160/hr',
      location: 'Noida, India'
    },
    {
      name: 'Tesla',
      img: 'https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png',
      time: '3 weeks ago',
      position: 'UI Engineer',
      type: 'Internship',
      level: 'Entry Level',
      pay: '$80/hr',
      location: 'Chennai, India'
    },
    {
      name: 'Spotify',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKB1fBlHxq3EtddqbiL8W-Z2IyOqNkcCSUfA&s',
      time: '4 days ago',
      position: 'UX Researcher',
      type: 'Part-Time',
      level: 'Mid-Level',
      pay: '$110/hr',
      location: 'Jaipur, India'
    },
    {
      name: 'IBM',
      img: 'https://images.vexels.com/media/users/3/140583/isolated/lists/905dd25934b7a05516389863f7cb9417-ibm-logo.png',
      time: '1 week ago',
      position: 'Visual Designer',
      type: 'Full-Time',
      level: 'Mid-Level',
      pay: '$125/hr',
      location: 'Gurgaon, India'
    }
  ];
  

  return (
    <div className='main'>
    {jobprofiles.map((props)=>{
      return <Card name={props.name} img={props.img} time={props.time} position={props.position} type={props.type} level={props.level} pay={props.pay} location={props.location}/>
    })}
    </div>
  )
}

export default App