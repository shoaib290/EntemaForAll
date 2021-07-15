import React, { useState } from "react";
import Orderitem from "./Orderitem";

function Createpurchaseorder() {


  const  [podocno,setPodocno]=useState();
  const  [podate,setPodate]=useState();
  const  [porevno,setPorevno]=useState();
  const  [ponumber,setPonumber]=useState();
  const  [poquotationref,setPoquotationref]=useState();
  const  [poproject,setPoproject]=useState();
  const  [popaymentmode,setPopaymentmode]=useState();
  const  [povendor,setPovendor]=useState();
  const  [pocode,setPocode]=useState();
  const  [pophone,setPophone]=useState();
  const  [pomobile,setPomobile]=useState();
  const  [poemail,setPoemail]=useState();
  const  [poadd,setPoadd]=useState();
  const  [postartdate,setPostartdate]=useState();
  const  [poenddate,setPoenddate]=useState();
  const  [polocation,setPolocation]=useState();
  const  [pomobilizationdate,setPomobilizationdate]=useState();
  const  [podesc,setPodesc]=useState();
  
  const  [pooisrno,setPooisrno]=useState();
  const  [pooidesc,setPooidesc]=useState();
  const  [pooiunit,setPooiunit]=useState();
  const  [pooiqty,setPooiqty]=useState();
  const  [pooiunitrate,setPooiunitrate]=useState();
  const  [pooiamount,setPooiamount]=useState();
  
  const  [pototal,setPototal]=useState();
  const  [pogst,setPogst]=useState();
  const  [pograndtotal,setPograndtotal]=useState();

  const [instruction, setInstruction] = useState("1. Payment shall be made for the quantities executed as per unit rates given above. \n2. Work Order number and date must be quoted on all correspondence. \n3. This order is subject to the terms and conditions set out on the face and Annexure -A \n4. The acceptance copy must be signed by vender or by its representative ( on vender’s behalf) on the face and Annexure - A \n 5. This Work Order is subject to the cancellation unless the subcontractor returns one copy signed with confirmation that all terms and conditions are accepted. \n 6. The following attachments form an integral part of this work Order.");
  const [deliveryTerms, setDeliveryTerms] = useState("1. Lubricants, top-up oil, repairs, daily maintenance, Service and Consumables of the Equipments shall be provide by Vender. \n2. In case of breakDown or Maintenance, Vwndor/Supplier shall provide a replacement of equipment immediatly at no extra cost.");
  const [conditionTerms, setConditionTerms] = useState("1. Above rate is applicable for 10 hours per day, 6 days a week, 260 hours per Month. \n2. Working Duration: 2 Month Extandable. \n3. Supply Food, accommodation & Transportation scope Entema al-shamal. \n4. Above Rate is exclusive of VAT. \n5. If you need any clarification on above matter or any assistance please feel free to contract undersigned. \n6. Vendor has to return the same purchase order to Entema Al-shamal by Fax or Email after Confirmation Signature.");

    
  const handleChangeEvent = (e) => {
    console.log('e.target.name : ', e.target.value);
    // return (e.target.name = e.target.value);
   
    const input = e.target.name

    if(input == "instruction"){
        setInstruction(e.target.value)
    } else if(input === "deliveryTerms"){
        setDeliveryTerms(e.target.value)
    } else if(input === "conditionTerms"){
        setConditionTerms(e.target.value)
    }
}


  return (
    <>
      <div
        class="container"
        style={{ paddingTop: "30px", paddingLeft: "50px" }}
      >
        <div className="scroll">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Purchase Orders</h3>
            </div>
          </div>
          <form>
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue" }}>New Purchase Orders</h5>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="userName">Doc No</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="userActdate">Date</label>
                <input
                  type="date"
                  class="form-control is-valid"
                  id="userActdate"
                  name="userActdate"
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="userName">Rev. No</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>

            <hr style={{ backgroundColor: "#030000" }} />
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue" }}>Work Order</h5>
              </div>
            </div>
            <div className="row">
              <div class="col-md-6 mb-3">
                <label for="userName">Number</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="userName">Quotation Ref</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div class="col-md-6 mb-3">
                <label for="userName">Project</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="userName">Mode / Terms Payment</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>
            <hr style={{ backgroundColor: "#030000" }} />
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue " }}>Vendor Info</h5>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="userRole">Vendor</label>
              <select
                class="form-control is-valid"
                id="userRole"
                name="userRole"
                required
              >
                <option value="">Select Vendors</option>
                <option value="1">Zeeshan</option>
                <option value="2">shabaz</option>
              </select>
            </div>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="userFname">Code</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userFname"
                  name="userFname"
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="userName">Phone Number</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>

              <div class="col-md-4 mb-3">
                <label for="userName">Contact Person</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="userFname">Mobile</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userFname"
                  name="userFname"
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="userName">Email</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>

              <div class="col-md-4 mb-3">
                <label for="userName">Vat</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="userFname">Address</label>
              <textarea
                type="text"
                class="form-control is-valid"
                id="userFname"
                name="userFname"
                required
              />
            </div>
            <hr style={{ backgroundColor: "#030000" }} />
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue" }}>Work Order</h5>
              </div>
            </div>
            <div className="row">
              <div class="col-md-6 mb-3">
                <label for="userActdate">Start Date</label>
                <input
                  type="date"
                  class="form-control is-valid"
                  id="userActdate"
                  name="userActdate"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="userActdate">End Date</label>
                <input
                  type="date"
                  class="form-control is-valid"
                  id="userActdate"
                  name="userActdate"
                  required
                />
              </div>{" "}
            </div>
            <div className="row">
              <div class="col-md-6 mb-3">
                <label for="userName">Location</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="userActdate">Mobilization Date</label>
                <input
                  type="date"
                  class="form-control is-valid"
                  id="userActdate"
                  name="userActdate"
                  required
                />
              </div>
            </div>

            <div class="col-md-10 mb-3">
              <label for="userFname">Description of work:</label>
              <textarea
                type="text"
                class="form-control is-valid"
                id="userFname"
                name="userFname"
                required
              />
            </div>
            <hr style={{ backgroundColor: "#030000" }} />
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue" }}>Order Items</h5>
              </div>
            </div>

            <Orderitem />
            <hr style={{ backgroundColor: "green" }} />
            <div class="col-md-3 mb-3">
              <label for="userActdate">TOTAL</label>
              <br />
              50
            </div>
            <div class="col-md-3 mb-3">
              <label for="userActdate">GST</label>
              <input
                type="number"
                class="form-control is-valid"
                id=""
                name="userActdate"
                required
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="userActdate"> GRAND TOTAL</label>
              <br />
              50
            </div>

            <hr style={{ backgroundColor: "#030000" }} />
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue" }}>INSTRUCTIONS</h5>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <label for="instruction">Instructions</label>
              <textarea
                type="text"
                className="form-control is-valid"
                name="instruction"
                onChange={handleChangeEvent}
                id="instruction"
                value={instruction}
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="deliveryTerms">Terms of delivery</label>
              <textarea
                type="text"
                className="form-control is-valid"
                name="deliveryTerms"
                onChange={handleChangeEvent}
                id="deliveryTerms"
                value={deliveryTerms}
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="conditionTerms">Terms & Conditions</label>
              <textarea
                type="text"
                className="form-control is-valid"
                name="conditionTerms"
                onChange={handleChangeEvent}
                id="conditionTerms"
                value={conditionTerms}
              />

            </div>
            <hr style={{ backgroundColor: "#030000" }} />
            <div className="heading-layout1">
              <div className="item-title">
                <h5 style={{ color: "blue" }}>Accepted By</h5>
              </div>{" "}
            </div>

            <div className="panel-body">
              <div className="row">
                <div className="col-sm-6">
                  <h4 className="vendor_name">Blueline Computers</h4>
                  <div className="row">
                    <div className="col-sm-5 col-xs-6 bot-left">
                      Name &amp; Title
                    </div>
                    <div className="col-sm-7 col-xs-6 bot-right"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5 col-xs-6 bot-left">Date</div>
                    <div className="col-sm-7 col-xs-6 bot-right"></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4>For Entema Al Shamal Gen. cont. Est</h4>
                  <h5>Authorised Signatory</h5>
                </div>
                <div className="col-sm-12 clearfix mt-3">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>{" "}
        </div>
      </div>
    </>
  );
}

export default Createpurchaseorder;
