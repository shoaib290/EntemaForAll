import React, { useState } from "react";
import { NotificationContainer,NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import Multirow from "./Multirow";




class Orderitem extends React.Component {

  state = {
    taskList: [
      {
        index: Math.random(),
      
       description: "",
        unit: "",
        qty: "",
        unitRate:"",
        amount:""
      },
    ],
   
  };


  handleChange = (e) => {
    if (
     
      [ "description", "unit", "qty","unitRate","amount"].includes(
        e.target.name
      )
    ) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addNewRow = () => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
         
          description: "",
           unit: "",
           qty: "",
           unitRate:"",
           amount:""
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();

  
    for (var i = 0; i < this.state.taskList.length; i++) {
      if (
        this.state.taskList[i].unit === "" ||
        this.state.taskList[i].qty === ""
      ) {
        NotificationManager.warning("Please Fill up Required Field.Please Check unit And qty Details");
        return false;
      }
    }

    // let data = { formData: this.state };

    // Axios.get("http://localhost:3004/getSequenceRespId").then((res) => {
    //   console.log("response id : ", res.data[0].RESPID);
    //   this.setState({
    //     respId: res.data[0].RESPID,
    //   });
    //   console.log("state : ", this.state);
    //   this.moveDataToDb(
    //     data.formData,
    //     data.formData.taskList.length,
    //     res.data[0].RESPID
    //   );

    //   if (res.data[0].RESPID){
    //     NotificationManager.success('Successfully updated Responsibilities');
        
    //     setTimeout(() => {
    //       this.props.history.push('/');
    //     }, 1000);
    //   }
       
    // }
    
    
    // );

    // this.clearForm(data.formData.taskList.length);
  
    return true;
  };

  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }

  clearForm = (row) => { 
    
    // for (var i=0; i = row; i++){
    //   this.deteteRow(i);
    // }

    document.getElementById("test-form").reset();

}

  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <>
        
         
           
            <form
            id="test-form"
              className="new-added-form-1"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >
              
             
              <div>
                <table
                  className="table display data-table text-nowrap dataTable no-footer"
                  id="DataTables_Table_test"
                  role="grid" 
                  style={{ backgroundColor: "#a8x0ff" }}
                >
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th style={{paddingLeft:'30px'}}>Description</th>
                      <th style={{paddingLeft:'56px'}}>Unit</th>
                      <th style={{paddingLeft:'45px'}}>QTY</th>
                      <th style={{paddingLeft:'30px'}}>Unit rate (Sar)</th>
                      <th style={{paddingLeft:'30px'}}>Amount (sar)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Multirow
                      add={this.addNewRow}
                      delete={this.clickOnDelete.bind(this)}
                      taskList={taskList}
                    />
                  </tbody>
                </table>
               
              </div>
            </form>

          
        
      
        <NotificationContainer/>
      </>
    );
  }
}

export default Orderitem;