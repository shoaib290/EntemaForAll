import React from 'react'
import Navbar from './Pages/Navbar'
import './Dashboard.css';
import { FaUsers } from 'react-icons/fa';
import {BsBlockquoteRight} from 'react-icons/bs'
import {RiUserSettingsFill} from 'react-icons/ri';
import {GoCalendar} from 'react-icons/go'
import { BiPurchaseTag  } from 'react-icons/bi';
function Dashboard() {
  return (
    <>
    <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
      <div className='container'>
      <div className="heading-layout1">
      <div className="item-title">
          <h3 style={{ padding: "50px" }}>Dashboard</h3>
      </div>
  </div>
        <div className="col-12 col-md-12">
          <div className="card-stats card-raised card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 border-right">
                  <div className="statistics">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="now-ui-icons ui-2_chat-round">
                          <FaUsers />
                        </i>
                      </div>
                      <h3 className="info-title">10</h3>
                      <h6 className="stats-title">Users</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 border-right">
                  <div className="statistics">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="now-ui-icons business_money-coins"><BiPurchaseTag />
                        </i>
                        </div>
                        <h3 className="info-title">
                        3,521</h3>
                      <h6 className="stats-title">Purchase Order</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 border-right">
                  <div className="statistics"
                  ><div className="info">
                      <div className="icon icon-info">
                        <i className="now-ui-icons users_single-02">
                        <RiUserSettingsFill />    </i>
                      </div>
                      <h3 className="info-title">562</h3>
                      <h6 className="stats-title">Vendors</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statistics">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="now-ui-icons objects_support-17">
                        <img src='client.png' style={{width:'40px',color:'black'}}/>
                        </i>
                      </div>
                      <h3 className="info-title">353
                      </h3>
                      <h6 className="stats-title">Clients</h6>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>



        <div className="col-12 col-md-12">
        <div className="card-stats card-raised card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="statistics">
                  <div className="info">
                    <div className="icon icon-primary">
                      <i className="now-ui-icons ui-2_chat-round">
                      <BsBlockquoteRight />
                      </i>
                    </div>
                    <h3 className="info-title">555</h3>
                    <h6 className="stats-title">Quotation</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 border-right">
                <div className="statistics">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="now-ui-icons business_money-coins"><GoCalendar/>
                      </i>
                      </div>
                      <h3 className="info-title">
                      1520</h3>
                    <h6 className="stats-title">Time Sheet</h6>
                  </div>
                </div>
              </div>
              
              <div className="col-md-3  border-right">
                <div className="statistics">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons objects_support-17">
                      <img src="manpower.png"  style={{width:'40px',color:'white'}}/>
                      </i>
                    </div>
                    <h3 className="info-title">170
                    </h3>
                    <h6 className="stats-title">ManPower</h6>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div></div>

    </>
  )
}

export default Dashboard
