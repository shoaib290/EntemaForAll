// eslint-disable-next-line

import React, { useState, useEffect } from 'react';
import {
    Container,
    Paper,
    Box,
    Grid,
    TextField,
    IconButton,
    Button,
} from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Switch from '@material-ui/core/Switch';
import Select from "@material-ui/core/Select";
import axios from "axios";
// import { RiUserSettingsLine } from 'react-icons/ri'




const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto",
        height: "auto",
        backgroundColor: theme.palette.white,
        paddingTop: theme.spacing(5),
    },
    inputGroup: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
}));

function CreateManpower() {

    const classes = useStyles();


    const [MpManPower, setMpManPower] = useState();
    const [MpMonth, setMpMont] = useState();
    const [MpYear, setMpYear] = useState();
    const [MpDescription, setMpDescription] = useState();
    const [MpIqamaId, setMpIqamaId] = useState();
    const [MpOtHrs, setMpOtHrs] = useState();
    const [MpOtRate, setMpOtRate] = useState();
    const [MpTotalAmount, setMpTotalAmount] = useState();
    const [MpTotalOt, setMpTotalOt] = useState();
    const [MpTotal, setMpTotal] = useState();
    const [MpWorkHrs, setMpWorkHrs] = useState();
    const [MpHrRate, setMpHrRate] = useState();




    let [taskList, setTasklist] = useState(
        {
            days1: "", days2: "", days3: "", days4: "", days5: "", days6: "", days7: "", days8: "", days9: "",
            days10: "", days11: "", days12: "", days13: "", days14: "", days15: "", days16: "", days17: "", days18: "",
            days19: "", days20: "", days21: "", days22: "", days23: "", days24: "", days25: "", days26: "", days27: "",
            days28: "", days29: "", days30: "", days31: ""
        }
    );

    const [users, setUsers] = useState([]);


    const optionUnit = [
        { key: "Select Unit", value: "" },
        { key: "Month", value: "Month" },
        { key: "Week", value: "Week" },
        { key: "Day", value: "Day" },
        { key: "Hour", value: "Hour" },
    ];

    let newData = [];


    console.log(taskList);

    let noOfDays = 0;

    const [isInputHidden29, setIsInputHidden29] = useState(false);
    const [isInputHidden30, setIsInputHidden30] = useState(false);
    const [isInputHidden31, setIsInputHidden31] = useState(false);

    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledRemove, setisDisabledRemove] = useState(false);

    const addUser = () => {

        if (MpMonth != "" && MpYear != "") {
            setUsers([taskList]);
            setIsDisabled(!isDisabled)
            setisDisabledRemove(true);
        }


        noOfDays = checkCalendarDays(MpMonth, MpYear);

        console.log('returned value of calendar : ', noOfDays);

        if (noOfDays === 28) {
            setIsInputHidden29(true);
            setIsInputHidden30(true);
            setIsInputHidden31(true);
        } else if (noOfDays === 29) {
            setIsInputHidden30(true);
            setIsInputHidden31(true);
        } else if (noOfDays === 30) {
            setIsInputHidden31(true);
        } else {
            setIsInputHidden29(false);
            setIsInputHidden30(false);
            setIsInputHidden31(false);
        }
        console.log(isInputHidden29, isInputHidden30, isInputHidden31)
    };


    const removeUsers = (index) => {
        if (MpMonth != "" && MpYear != "") {
            setIsDisabled(false)
            setisDisabledRemove(!isDisabledRemove);
        }

        setIsDisabled(!isDisabled)
        setisDisabledRemove(!isDisabledRemove);
        console.log("index value :", index);
        const filteredUsers = [...users];
        filteredUsers.splice(index, 1);

        setUsers(filteredUsers);
    };

    const checkCalendarDays = (month, year) => {
        /*assuming month = 3 and year = 2021 (make sure when you select march your variable returns you in number that is 3)*/
        return new Date(year, month, 0).getDate();
    }

    const changeHandler = (e, index) => {

        const updatedUsers = users.map((item, i) =>
            index === i
                ? Object.assign(item, { [e.target.name]: e.target.value })
                : item
        );
        console.log("newnew:", e.target.value);

        setUsers(updatedUsers);
    };

    const handleChangeEvent = (e, index) => {
        console.log('e : ', e);
        const input = e.target.name;


        console.log('field name : ', e.target.name + '- value -', e.target.value);

        if (input === "MpManPower") {
            setMpManPower(e.target.value);
        } else if (input === "MpMonth") {
            setMpMont(e.target.value);
        } else if (input === "MpYear") {
            setMpYear(e.target.value);
        } else if (input === "MpDescription") {
            setMpDescription(e.target.value);
        } else if (input === "MpIqamaId") {
            setMpIqamaId(e.target.value);
        } else if (input === "MpWorkHrs") {
            setMpWorkHrs(e.target.value);
        } else if (input === "MpOtHrs") {
            setMpOtHrs(e.target.value);
        } else if (input === "MpOtRate") {
            setMpOtRate(e.target.value);
        } else if (input === "MpHrRate") {
            setMpHrRate(e.target.value);
        } else if (input === "MpTotalAmount") {
            setMpTotalAmount(e.target.value);
        } else if (input === "MpTotalOt") {
            setMpTotalOt(e.target.value);
        } else if (input === "MpTotal") {
            setMpTotal(e.target.value);

        } else if (["days1", "days2", "days3", "days4", "days5", "days6", "days7", "days8", "days9", "days10", "days11", "days12", "days13", "days14", "days15", "days16", "days17", "days18", "days19", "days20", "days21", "days22", "days23", "days24", "days25", "days26", "days27", "days28", "days29", "days30", "days31"].includes(input)) {
            console.log('exceptional handling');
            changeHandler(e, index);
        }

        console.log("Name : ", e.target.name, " - Value - ", e.target.value, " - dataset id - ", e.target);
        console.log("log of order Items : ", users);
        if (MpMonth && MpYear != "") {
            setIsDisabled(false);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post("http://localhost:3009/insertManPTimesheetData", {

            mtsmanpower:MpManPower,
            mtsmonth:MpMonth,
            mtsyear:MpYear,
            mtsdescription:MpDescription,
            mtsiqama:MpIqamaId,
            mtsworkhours:MpWorkHrs,
            mtsothours:MpOtHrs,
            mtshrrate:MpHrRate,
            mtsotrate:MpOtRate,
            mtstotal:MpTotal,
            mtsgrid:true,

        })
        .then((res) => {
          console.log("updated Values Successfully : ", res.data);
        });



        console.log('test submit');
    }

    // useEffect(() => {
    //     if (MpMonthlyRate != "" && MpExpectedWorkingHours != "") {
    //         // let perDay = Math.round(MpMonthlyRate/MpExpectedWorkingHours);
    //         let perDay = MpMonthlyRate / MpExpectedWorkingHours;
    //         setMpOtRate(perDay.toFixed(2));
    //         setMpHrRate(perDay.toFixed(2));
    //     }
    // }, [MpMonthlyRate, MpExpectedWorkingHours])

    // const testing = () => {
    //     console.log('testing bluee event');
    //     let Ottime = 0;
    //     let RHtime = 0;
    //     let OTamount = 0;
    //     let RHamount = 0;
    //     let TotalAmount = 0;

    //     if (MpTotalHours > MpExpectedWorkingHours) {
    //         console.log('Greater man');
    //         Ottime = MpTotalHours - MpExpectedWorkingHours;
    //         OTamount = MpOtRate * Ottime;
    //         setMpTotalOt(OTamount);
    //         console.log('Ottime : ', Ottime);
    //         console.log('OTamount : ', OTamount);

    //         RHamount = MpExpectedWorkingHours * MpHrRate;
    //         TotalAmount = OTamount + RHamount;
    //         setMpTotal(TotalAmount);

    //         console.log('RHamount : ', RHamount);
    //         console.log('TotalAmount : ', TotalAmount);

    //     } else {
    //         console.log('lesser man');
    //         RHamount = MpTotalHours * MpHrRate;
    //         setMpTotalOt(0);
    //         setMpTotal(RHamount.toFixed(2));
    //     }

    // }

    return (
        <>
            <div class="container" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
                <div className="heading-layout1">
                    <div className="item-title">
                        <h3 style={{ padding: "50px" }}>Manpower Timesheet</h3>
                    </div>

                </div>
                <form onChange={handleChangeEvent} onSubmit={handleSubmit}>

                    <div className="row">
                        <div class="col-md-4 mb-3" >
                            <label for="userRole">ManPower</label>
                            <select class="form-control is-valid" value={MpManPower} id="MpManPower" name="MpManPower" required>
                                <option value="">Select ManPower</option>
                                <option value="1">Zeeshan</option>
                                <option value="2">shabaz</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3" >
                            <label for="userRole">Month</label>
                            <select class="form-control is-valid" value={MpMonth} id="MpMonth" name="MpMonth" required>
                                <option value="">Select Month</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3" >
                            <label for="userRole">Years</label>
                            <select class="form-control is-valid" value={MpYear} id="MpYear" name="MpYear" required>
                                <option value="">Select Year</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div class="col-md-8 mb-3">
                            <label for="userFname">Description</label>
                            <textarea type="text" class="form-control is-valid" value={MpDescription} id="MpDescription" name="MpDescription" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userName">Iqama Id</label>
                            <input type="text" class="form-control is-valid" value={MpIqamaId} id="MpIqamaId" name="MpIqamaId" required />
                        </div></div>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="userName">Work Hrs</label>
                            <input type="text" class="form-control is-valid" value={MpWorkHrs} id="MpWorkHrs" name="MpWorkHrs" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userName">Ot Hrs</label>
                            <input type="text" class="form-control is-valid" value={MpOtHrs} id="MpOtHrs" name="MpOtHrs" required />

                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="userName">Hr Rate</label>
                            <input type="text" class="form-control is-valid" value={MpHrRate} id="MpHrRate" name="MpHrRate" required />

                        </div> </div><div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="userName">Ot Rate</label>
                            <input type="text" class="form-control is-valid" value={MpOtRate} id="MpOtRate" name="MpOtRate" required />
                        </div>


                        <div class="col-md-4 mb-3">
                            <label for="userName">Total Amount</label>
                            <input type="text" class="form-control is-valid" value={MpTotalAmount} id="MpTotalAmount" name="MpTotalAmount" required />
                        </div>
                    </div>

                    <div >
                        <Container className={classes.root}>
                            <ButtonGroup disableElevation variant="contained" color="primary">
                                <Button color="default" onClick={addUser} disabled={isDisabled}>
                                    Show
                                </Button>
                                <Button color="default" onClick={removeUsers} disabled={!isDisabledRemove}>
                                    Remove
                                </Button>
                            </ButtonGroup>
                            {users.map((task, i) => (
                                <Grid
                                    container
                                    spacing={2}
                                    key={i}
                                    className={classes.inputGroup}

                                >
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 1"
                                            name="days1"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days1}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 2"
                                            name="days2"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days2}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 3"
                                            name="days3"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days3}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 4"
                                            name="days4"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days4}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 5"
                                            name="days5"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days5}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 6"
                                            name="days6"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days6}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 7"
                                            name="day7"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days7}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 8"
                                            name="days8"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days8}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 9"
                                            name="days9"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days9}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 10"
                                            name="days10"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days10}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 11"
                                            name="days11"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days11}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 12"
                                            name="days12"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days12}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 13"
                                            name="days13"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days13}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 14"
                                            name="days14"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days14}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day15"
                                            name="days15"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days15}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 16"
                                            name="days16"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days16}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 17"
                                            name="days17"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days17}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 18"
                                            name="days18"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days18}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 19"
                                            name="days19"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days19}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 20"
                                            name="days20"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days20}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 21"
                                            name="days21"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days21}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 22"
                                            name="days22"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days22}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 23"
                                            name="days23"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days23}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 24"
                                            name="days24"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days24}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 25"
                                            name="days25"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days25}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 26"
                                            name="days26"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days26}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 27"
                                            name="days27"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days27}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 28"
                                            name="days28"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days28}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 29"
                                            name="days29"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days29}
                                            fullWidth
                                            disabled={isInputHidden29}
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 30"
                                            name="days30"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days30}
                                            fullWidth
                                            disabled={isInputHidden30}
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Day 31"
                                            name="days31"
                                            type="days"
                                            //placeholder="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => changeHandler(e, i)}
                                            value={task.days31}
                                            fullWidth
                                            disabled={isInputHidden31}
                                        />
                                    </Grid>


                                </Grid>
                            ))}

                        </Container>
                    </div>
                    <button type="submit" class="btn btn-outline-success" style={{ marginTop: "20px", marginBottom: "40px" }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateManpower;
