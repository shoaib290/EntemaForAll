import React, { useState } from 'react'
import './Adduser.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

function Adduser() {

    const [ userName, setUserName] = useState();
    const [ userFname, setUserFname] = useState();
    const [ userEmail, setUserEmail] = useState();
    const [ userPwd, setUserPwd] = useState();
    const [ userCpwd, setUserCpwd] = useState();
    const [ userPhone, setUserPhone] = useState();
    const [ userDesignation, setUserDesignation] = useState();
    const [ userRole, setUserRole] = useState();
    const [ userStatus, setUserStatus] = useState();
    const [ userActdate, setUserActdate] = useState();
    const [ userDactdate, setUserDactdate] = useState();

        

    const handleSubmit = (event) => {
        console.log('event : ',event.target[0].id);
        console.log('event : ',event.target[0].value);
        // event.preventDefault();

        if ( userPwd == userCpwd){
            alert('Hello');
            
            Axios.post("http://localhost:3009/insertUserData", {
                userName  : userName,
                userFname : userFname,
                userEmail : userEmail,
                userPwd : userPwd,
                userCpwd : userCpwd,
                userPhone : userPhone,
                userDesignation : userDesignation,
                userRole : userRole,
                userStatus : userStatus,
                userActdate : userActdate,
                userDactdate : userDactdate,
               }).then((res) => {
                // setData(res.data);
                //  setDupData(res.data);
                 console.log("result set in effect: ", res);
               });

        }else if ( userPwd != userCpwd){
            alert('your password doesnot match');
            return false;
        }

    }

  

    const handleChangeEvent = (e) => {
        console.log('e.target.name : ', e.target.value);
        // return (e.target.name = e.target.value);
       
        const input = e.target.name

        if(input == "userName"){
            setUserName(e.target.value)
        } else if(input === "userFname"){
            setUserFname(e.target.value)
        } else if(input === "userEmail"){
            setUserEmail(e.target.value)
        } else if(input === "userPwd"){
            setUserPwd(e.target.value)
        } else if(input === "userCpwd"){
            setUserCpwd(e.target.value)
        } else if(input === "userPhone"){
            setUserPhone(e.target.value)
        } else if(input === "userDesignation"){
            setUserDesignation(e.target.value)
        } else if(input === "userRole"){
            setUserRole(e.target.value)
        } else if(input === "userStatus"){
            setUserStatus(e.target.value)
        } else if(input === "userActdate"){
            setUserActdate(e.target.value)
        } else if(input === "userDactdate"){
            setUserDactdate(e.target.value)
        }
    }

    return (
        <>
            <div class="container" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
                <div className="heading-layout1">
                    <div className="item-title">
                        <h3 style={{ padding: "50px" }}>Add User</h3>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="userName">User name</label>
                            <input type="text" class="form-control is-valid" id="userName" name="userName" onChange={handleChangeEvent} required/>
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="userFname">Full Name</label>
                            <input type="text" class="form-control is-valid" id="userFname" name="userFname" onChange={handleChangeEvent} required/>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userEmail">User Email</label>
                            <input type="text" class="form-control is-valid" id="userEmail" name="userEmail" onChange={handleChangeEvent} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="userPwd">Password</label>
                            <input type="password" class="form-control is-valid" id="userPwd" name="userPwd" onChange={handleChangeEvent} required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userCpwd">Confirm Password</label>
                            <input type="password" class="form-control is-valid" id="userCpwd" name="userCpwd" onChange={handleChangeEvent} required />  
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userPhone">Phone</label>
                            <input type="text" class="form-control is-valid" id="userPhone" name="userPhone" onChange={handleChangeEvent} required />
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="userDesignation">Designation</label>
                            <input type="text" class="form-control is-valid" id="userDesignation" name="userDesignation" onChange={handleChangeEvent} required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userRole">Role</label>
                            <select class="form-control is-valid" id="userRole" name="userRole" onChange={handleChangeEvent} required>
                                <option value="">Select Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Operator</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userStatus">Status</label>
                            <select class="form-control is-valid" id="userStatus" name="userStatus" onChange={handleChangeEvent} required>
                                <option value="">select Status</option>
                                <option value="1">Active</option>
                                <option value="2">InActive</option>

                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4 mb-3">

                            <label for="userActdate">Activation Date</label>
                            <input type="date" class="form-control is-valid" id="userActdate" name="userActdate" onChange={handleChangeEvent} required />
                        </div>
                        <div class="col-md-4 mb-3">

                            <label for="userDactdate">Deactivation Date</label>
                            <input type="date" class="form-control is-valid" id="userDactdate" name="userDactdate" onChange={handleChangeEvent} required />
                        </div>
                    </div>
                    <div>

                        <button type="submit" class="btn btn-outline-success">Submit</button>
                    </div>
</form>
</div>

        </>
    )
}

export default Adduser
