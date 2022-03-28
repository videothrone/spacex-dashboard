import React, { useEffect, useState} from 'react';
import axios from 'axios';

const GetLaunches = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('https://api.spacexdata.com/v4/launches/past');
          // Pull only the newest six launches from response, put them into state
          setData(response.reverse().slice(0, 6));
          console.log("GetLaunchesData: ", response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
      fetchData();
    }, []);
  
    return (
      <div className='past-launch'>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <h2 className="font-gradient">Latest launches</h2>
          <div className='past-launch-elements'>
          {data.map((item, index) => (<div className='past-launch-elements_elem' key={index}><div className='past-launch-elements_name'>{item.name}</div><div className='past-launch-elements_id'><b>ID: </b>{item.id}</div></div>))}
          </div>
        </div>
      )}
      </div>
    )
  }
  
  export default GetLaunches;