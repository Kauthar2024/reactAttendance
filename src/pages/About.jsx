import React from 'react';

const About = (props) => {
    const [users, setUsers] = useState([]);
    // const [count, setCount] = useState(0);
     useEffect(()=>{
      const handleUser= async()=>{
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
          const resData = response.data.slice(0,3)
          setUsers(resData);
          setCount(resData.length)
          // console.log(response)
          // const responseData = response.data;
          // return responseData;
        } catch (error) {
          console.error("failed to fetch data", error.message)
        }
    
      }
      handleUser();
     },[]);
    return (
        <div>
            {/* <div>
              <h2>User Info</h2>
            {users.length > 0 ?(
              users.map((user)=>(
                <div key={user.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                  <h1 key={user.id}>{user.id}</h1>
                  <h2>{user.title}</h2>
                  <h2>{user.body}</h2>
                </div>
              )
              )
            ):(
              <p>Loading...</p>
            )}
              </div> */}
            <h1>Welcome {props.username}</h1>
               <h2>attendance record:</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>s/n</th>
                                        <th>Date</th>
                                        <th>In Time</th>
                                        <th>Out Time</th>
                                        {/* <th>count</th> */}
                                         {/* <th>Absent/Leaves/Remark</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                  {/* <tr>
                                    <td>2</td>
                                    <td>jkl;</td>
                                    <td>jkd</td>
                                    <td>wewr</td>
                                  </tr> */}
                                  {users.map((user)=>(
            
                                    <tr key={user.id}>
                                        <td>{user.userId}</td>
                                        <td>{user.id}</td>
                                        <td>{user.title}</td>
                                        <td>{user.body}</td>
                                       
                                    </tr>
                                  ))}
                                  
                                  </tbody>
                            </table>
        </div>
    );
}

export default About;
