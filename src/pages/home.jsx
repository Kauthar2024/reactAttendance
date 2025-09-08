import { useLocation } from "react-router-dom";
import About from "./About";

const Home = () => {
    const location = useLocation();
    // const username = location.state?.username || localStorage.getItem("loggedInUser") || "Guest";
    const username = location.state?.username || "Guest";
      console.log(location.state?.username)
 const name = "Kauthar"
    return (
        <>
        <main> 
             <div className="container"> 
                {/* <p>ertyui</p> */}
              <div className="form-container">
                 <h1>Welcome employee {username} attendance form</h1>
            <form action="">

                <div class="names">
                   <div class="fname input-names">
                    <label for="fname">First name </label><br />
                    <input type="text" name="fname"/> 
                    </div>
                     <div class="lname input-names">
                       <label for="lname">Last name </label> <br />
                      <input type="text" name="lname"/>
                    </div>
                </div>
                 <div className="field">
                      <label for="id"> Employee ID </label> <br/>
                    <input type="number" number="id" placeholder="e.g 23" />
                      </div>
                <div className="field">
                      <label for="department"> Department </label><br/>
                    <input type="text" name="department" />
                </div>
                   <div className="field">
                      <label for="Position"> Position/Title </label><br/>
                    <input type="text" name="Position" />
                </div>

            </form>
                <h2>attendance record:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>s/n</th>
                            <th>Date</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Total Hours</th>
                             <th>Absent/Leaves/Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                          <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                          <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                         <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <h2>Employee Signature</h2>

   
                   <h2>date singned</h2>
                    <input type="Date" id="Date" name="Date" />  <br />
                      {/* <label for="date"> Date</label> */}
                      <div className="btn">
                      <button>submit</button>

                      </div>
        </div>
        <About username={name}/>
            </div>
         </main>
       
        </>
    );
}
export default Home;
