import React from 'react'
import './CSS/choice.css'

import { useHistory,useParams } from 'react-router-dom'

function Makechoice() {
    const history=useHistory()
    const {FullName}=useParams()

    function womenHandler(){
        history.push(`/women/${FullName}`)
  
    }
    function menHandler(){
        history.push(`/men/${FullName}`)
  
    }
    function childrenHandler(){
        history.push(`/children/${FullName}`)
  
    }

    return (
        <div>
            
        <h1 className="heading">Welcome {FullName}</h1> <br/><br/><br/><br/><br/>
        <h3><i>You're looking for</i></h3> <br/>
        <div class="row">
<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
<div className=" mycard card">
<div className="card-header">
<button onClick={menHandler} className=" cardbutton  bg-dark text-white">Men</button>

</div>
</div>
</div>

<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
<div className="mycard card">
<div className="card-header">
<button onClick={womenHandler} className=" cardbutton  bg-dark text-white">Women</button>

</div>
</div>
</div>

<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
<div className="mycard card">
<div className="card-header">
<button onClick={childrenHandler} className=" cardbutton bg-dark text-white  ">Children</button>

</div>
</div>
</div>
        </div>
        </div>
    )
}

export default Makechoice


