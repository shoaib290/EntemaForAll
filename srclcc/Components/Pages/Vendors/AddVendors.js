import { useState } from "react";
import Axios from 'axios';

function AddVendors() {
  const [vendorname, setVendorname] = useState();
  const [vendorcode, setVendorcode] = useState();
  const [vendorfline, setVendorfline] = useState();
  const [vendoradd, setVendoradd] = useState();
  const [vendorcperson, setVendorcperson] = useState();
  const [vendorphone, setVendorphone] = useState();
  const [vendoremail, setVendoremail] = useState();
  const [vendorbfname, setVendorbfname] = useState();
  const [vendorbankname, setVendorbankname] = useState();
  const [vendorbankacc, setVendorbankacc] = useState();
  const [vendoriban, setVendoriban] = useState();
  const [vendorvat, setVendorvat] = useState();
  const [vendordocno, setVendordocno] = useState();
  const [createdby, setCreatedby] = useState("Mazhar");
  const [vendorstatus, setVendorstatus] = useState("Active");

  const handleChangeEvent = (e) => {
    console.log("e.target.name : ", e.target.value);
    // return (e.target.name = e.target.value);

    const input = e.target.name;

    if (input === "vendorname") {
      setVendorname(e.target.value);
    } else if (input === "vendorcode") {
      setVendorcode(e.target.value);
    } else if (input === "vendorfline") {
      setVendorfline(e.target.value);
    } else if (input === "vendoradd") {
      setVendoradd(e.target.value);
    } else if (input === "vendorcperson") {
      setVendorcperson(e.target.value);
    } else if (input === "vendorphone") {
      setVendorphone(e.target.value);
    } else if (input === "vendoremail") {
      setVendoremail(e.target.value);
    } else if (input === "vendorbfname") {
      setVendorbfname(e.target.value);
    } else if (input === "vendorbankname") {
      setVendorbankname(e.target.value);
    } else if (input === "vendorbankacc") {
      setVendorbankacc(e.target.value);
    } else if (input === "vendoriban") {
      setVendoriban(e.target.value);
    } else if (input === "vendorvat") {
      setVendorvat(e.target.value);
    } else if (input === "vendordocno") {
      setVendordocno(e.target.value);
    } else if (input === "vendorstatus") {
      setVendorstatus(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("event : ", event);


    Axios.post("http://localhost:3009/insertVendorData", {
        vendorname:vendorname,
        vendorcode:vendorcode,
        vendoradd:vendoradd,
        vendorcperson:vendorcperson,
        vendorphone:vendorphone,
        vendoremail:vendoremail,
        vendorbfname:vendorbfname,
        vendorbankname:vendorbankname,
        vendorbankacc:vendorbankacc,
        vendoriban:vendoriban,
        vendorvat:vendorvat,
        vendordocno:vendordocno,
        createdby:createdby,
        vendorstatus:vendorstatus,
   }).then((res) => {
    // setData(res.data);
    //  setDupData(res.data);
     console.log("result set in effect: ", res);
   });

    
  };

  return (
    <>
      <div
        class="container"
        style={{ paddingTop: "30px", paddingLeft: "50px" }}
      >
        <div className="scroll">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Add Vendors</h3>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="vendorname">Vendor Name</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorname"
                  name="vendorname"
                  onChange={handleChangeEvent}
                  required
                />
              </div>

              <div class="col-md-4 mb-3">
                <label for="vendorcode">Code</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorcode"
                  name="vendorcode"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendorfline">Fixed line Number</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorfline"
                  name="vendorfline"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="vendoradd">Address</label>
              <textarea
                type="text"
                class="form-control is-valid"
                id="vendoradd"
                name="vendoradd"
                onChange={handleChangeEvent}
                required
              />
            </div>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="vendorcperson">Contact Person</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorcperson"
                  name="vendorcperson"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendorphone">Mobile</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorphone"
                  name="vendorphone"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendoremail">Email</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendoremail"
                  name="vendoremail"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="vendorbfname">Benificiary Name</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorbfname"
                  name="vendorbfname"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendorbankname">Bank Name</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorbankname"
                  name="vendorbankname"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendorbankacc">Account No</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorbankacc"
                  name="vendorbankacc"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div class="col-md-4 mb-3">
                <label for="vendoriban">Iban No </label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendoriban"
                  name="vendoriban"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendorvat">VAT</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendorvat"
                  name="vendorvat"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="vendordocno">Doc No</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="vendordocno"
                  name="vendordocno"
                  onChange={handleChangeEvent}
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-outline-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddVendors;
