
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './CSS/home.css'

//  stateless Component
function Home() {
    const history = useHistory()
    const [FirstName, setFirstName] = useState()
    const [LasttName, setLastname] = useState()

    // handle  login  submit
    function submitHandler(event) {
        if (FirstName != undefined && LasttName != undefined) {
            let FullName = FirstName + " " + LasttName
            history.push(`/choice/${FullName}`)
        } else if (FirstName == undefined && LasttName != undefined) {
            alert("Enter First Name")
        } else if (FirstName != undefined && LasttName == undefined) {
            alert("Enter Last Name")
        }
        else if (FirstName == undefined && LasttName == undefined) {
            alert("Enter First Name and Last Name Both")
        }
        event.preventDefault()
    }
    return (
        <div className="myrow hero row">
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                <div className=" homecard card">
                    <div className=" myrow card-body">
                        <div className=" row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <img className="mydress1" src="https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/ic0ypeudonlwmxlmg3rf" alt="Logo" /> <br /><br /><br />
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <img className="mydress1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPDyWaXFCSVcs4PTmYzEVqrkvmktoftMCU3LDYkuJWkh7riCnazdb_J9YBYQ&usqp=CAc" alt="Logo" /> <br /><br /><br />
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <img className="mydress1" src="https://m.media-amazon.com/images/I/718v4JVlj4L._AC_SX200_SY161_QL70_.jpg" alt="Logo" /> <br /><br /><br />

                            </div>
                        </div>
                        <b><i>
                            Have a Break. Have a Giganticdesire.With A Name Like Giganticdesire, It Has To Be Good.
                            Giganticdesire will live on forever.Every Giganticdesire Helps.
                            Nobody doesn't like Giganticdesire.Giganticdesire - a class of it's own
            God made Giganticdesire.It's the Bright One, it's the Right One, that's Giganticdesire.</i></b>  </div></div></div>
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div className=" homecard card">
                    <div className="card-body">
                        <form >
                            <div className="form-group">
                                <label >First Name:</label>
                                <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="Enter First Name" />
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input type="text" value={LasttName} onChange={(e) => setLastname(e.target.value)} className="form-control" id="pwd" placeholder="Enter Last name" />
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className=" mybtn btn btn-primary" onClick={submitHandler}><i className="material-icons"> arrow_right_alt</i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div></div>
    )
}

export default Home

