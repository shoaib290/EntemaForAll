const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Welcome1",
  database: "react_schema",
});

db.connect((err) => {
  if (err) {
    console.log("These is error while connecting to db", err.stack);
  } else {
    console.log("Succeed and connection thread id is ", db.threadId);
  }
});


app.post("/create", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const creationdate = req.body.creationdate;
  const closingdate = req.body.closingdate;
  const collorneck = req.body.collorneck;
  const chest = req.body.chest;
  const stomach = req.body.stomach;
  const belly = req.body.belly;
  const sidecut = req.body.sidecut;
  const topheight = req.body.topheight;
  const waist = req.body.waist;
  const hip = req.body.hip;
  const thighs = req.body.thighs;
  const lowerthigh = req.body.lowerthigh;
  const ankle = req.body.ankle;
  const description = req.body.description;
  const testdata = req.body.testdata;
  const status = req.body.status;

  // console.log("Test values in services req values :", req);

  // console.log("Test values in services res values :", res);

  db.query(
    "insert into react_schema.stichpad(stich_name ,stich_gender ,stich_creatdate ,stich_closdate ,stich_neck ,stich_chest ,stich_stomach ,stich_belly ,stich_sidecut ,stich_tophght ,stich_waist ,stich_hip ,stich_thigh ,stich_lthigh ,stich_ankle ,stich_desc,dummy1,stich_status ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      name,
      gender,
      creationdate,
      closingdate,
      collorneck,
      chest,
      stomach,
      belly,
      sidecut,
      topheight,
      waist,
      hip,
      thighs,
      lowerthigh,
      ankle,
      description,
      testdata,
      status,
    ],
    (err, result) => {
      // console.log("Test values in services :", name);
      if (err) {
        console.log("There is error ", err + result);
      } else {
        res.send("values inserted");
      }
    }
  );
});


app.post("/update", (req, res) => {
  const stichid = req.body.stichid;
  const name = req.body.name;
  const gender = req.body.gender;
  const creationdate = req.body.creationdate;
  const closingdate = req.body.closingdate;
  const collorneck = req.body.collorneck;
  const chest = req.body.chest;
  const stomach = req.body.stomach;
  const belly = req.body.belly;
  const sidecut = req.body.sidecut;
  const topheight = req.body.topheight;
  const waist = req.body.waist;
  const hip = req.body.hip;
  const thighs = req.body.thighs;
  const lowerthigh = req.body.lowerthigh;
  const ankle = req.body.ankle;
  const description = req.body.description;
  const status = req.body.status;

  // console.log("Test values in services req values :", req);

  // console.log("Test values in services res values :", res);

  db.query(
    "update react_schema.stichpad set stich_name=?,stich_gender=?,stich_creatdate=?,stich_closdate=?,stich_neck=?,stich_chest=?,stich_stomach=?,stich_belly=?,stich_sidecut=?,stich_tophght=?,stich_waist=?,stich_hip=?,stich_thigh=?,stich_lthigh=?,stich_ankle=?,stich_desc=?,stich_status=? where stich_id = '?' ",
    [
      name,
      gender,
      creationdate,
      closingdate,
      collorneck,
      chest,
      stomach,
      belly,
      sidecut,
      topheight,
      waist,
      hip,
      thighs,
      lowerthigh,
      ankle,
      description,
      status,
	  stichid,
    ],
    (err, result) => {
      console.log("Test values in update services :", name);
      if (err) {
        console.log("There is error ", err + result);
      } else {
        res.send("values Updated");
      }
    }
  );
}); 


app.post("/insertUserData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.userActdate);
		 
		 
	    const userName  = req.body.userName;
        const userFname = req.body.userFname;
        const userEmail = req.body.userEmail;
        const userPwd = req.body.userPwd;
        const userCpwd = req.body.userCpwd;
        const userPhone = req.body.userPhone;
        const userDesignation = req.body.userDesignation;
        const userRole = req.body.userRole;
        const userStatus = req.body.userStatus;
        const userActdate = req.body.userActdate;
        const userDactdate = req.body.userDactdate;	

	
	
	 const sql = `INSERT INTO MS_ENT_USERS(USER_NAME ,USER_FNAME ,USER_EMAIL ,USER_PWD ,USER_PHONE ,USER_DESIG ,USER_ROLE ,USER_STATUS ,USER_ACT_DATE ,USER_DACT_DATE) VALUES (?,?,?,?,?,?,?,?,?,?)`;
	
		db.query(sql,[userName,userFname,userEmail,userPwd,userPhone,userDesignation,userRole,userStatus,userActdate,userDactdate], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getUserData", (req, res) =>{
  db.query("select * from MS_ENT_USERS", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});



app.post("/insertVendorData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.vendorname);
		 
		 
		const vendorid = req.body.vendorid;
		const vendorname = req.body.vendorname;
		const vendorcode = req.body.vendorcode;
		const vendoradd = req.body.vendoradd;
		const vendorcperson = req.body.vendorcperson;
		const vendorphone = req.body.vendorphone;
		const vendoremail = req.body.vendoremail;
		const vendorbfname = req.body.vendorbfname;
		const vendorbankname = req.body.vendorbankname;
		const vendorbankacc = req.body.vendorbankacc;
		const vendoriban = req.body.vendoriban;
		const vendorvat = req.body.vendorvat;
		const vendordocno = req.body.vendordocno;
		const createdby = req.body.createdby;
		const vendorstatus = req.body.vendorstatus;

	
	
	 const sql = `insert into MS_ENT_VENDORS(VENDOR_ID,VENDOR_NAME,VENDOR_CODE,VENDOR_ADD,VENDOR_CPERSON,VENDOR_PHONE,VENDOR_EMAIL,VENDOR_BFNAME,VENDOR_BANK_NAME,VENDOR_BANK_ACC,VENDOR_IBAN,VENDOR_VAT,VENDOR_DOC_NO,CREATED_BY,CREATED_DATE,VENDOR_STATUS)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,current_date(),?)`;
	
		db.query(sql,[vendorid,vendorname,vendorcode,vendoradd,vendorcperson,vendorphone,vendoremail,vendorbfname,vendorbankname,vendorbankacc,vendoriban,vendorvat,vendordocno,createdby,vendorstatus], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});


app.get("/getVendorData", (req, res) =>{
  db.query("select * from MS_ENT_VENDORS", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/getVendorIDData", (req, res) =>{
// console.log('requesting data : ', req);
  vendorID = req.body.vendorID;

  db.query("select * from MS_ENT_VENDORS where vendor_id = ?",[vendorID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertClientData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
	 console.log("Test values NAme :", req.clientcpname);
		 
		 
	const clientcpname =req.body.clientcpname ;
	const clientcompname=req.body.clientcompname;
	const clientphone =req.body.clientphone ;
	const clientemail =req.body.clientemail ;
	const clientadd=req.body.clientadd;
	const createdby=req.body.createdby;


	
	 const sql = `INSERT INTO MS_ENT_CLIENTS(CLIENT_CPNAME,CLIENT_COMP_NAME,CLIENT_PHONE,CLIENT_EMAIL,CLIENT_ADD,CREATED_BY,CREATED_DATE) VALUES(?,?,?,?,?,?,current_date())`;
	
		db.query(sql,[clientcpname,clientcompname,clientphone,clientemail,clientadd,createdby], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getClientData", (req, res) =>{
  db.query("select * from MS_ENT_CLIENTS", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertPOData", (req, res) =>{
	
  // console.log("Test values in services req values :", req);
  //   console.log("Test values NAme :", req.podate);
    
    
   const  podocno = req.body.podocno;
   const  podate = req.body.podate;
   const  porevno = req.body.porevno;
   const  ponumber = req.body.ponumber;
   const  poquotationref = req.body.poquotationref;
   const  poproject = req.body.poproject;
   const  popaymentmode = req.body.popaymentmode;
   const  povendor = req.body.povendor;
   const  pocode = req.body.pocode;
   const  pophone = req.body.pophone;
   const  pocpperson = req.body.pocpperson;
   const  pomobile = req.body.pomobile;
   const  poemail = req.body.poemail;
   const  povat = req.body.povat;
   const  poadd = req.body.poadd;
   const  postartdate = req.body.postartdate;
   const  poenddate = req.body.poenddate;
   const  polocation = req.body.polocation;
   const  pomobilizationdate = req.body.pomobilizationdate;
   const  podesc = req.body.podesc;
   const  pototal = req.body.pototal;
   const  pogst = req.body.pogst;
   const  pograndtotal = req.body.pograndtotal;
   const  instruction = req.body.instruction;
   const  deliveryTerms = req.body.deliveryTerms;
   const conditionTerms = req.body.conditionTerms;
   const createdBy = req.body.createdBy;

   const sql = `INSERT INTO MS_ENT_PURCHASE_ORDER(DOC_NO,REV_NO,WO_NUMBER,WO_QUO_REF,WO_PROJECT,WO_PAYMENT_MODE,VI_VENDOR,VI_CODE,VI_PH_NO,VI_CONTACT_PERSON,VI_MOBILE,VI_EMAIL,VI_VAT,VI_ADDRESS,WS_START_DATE,WS_END_DATE,WS_LOC,WS_MOB_DATE,WS_DESC,PO_TOTAL,PO_GST,PO_GRANDTOTAL,PO_INSTRUCTION,PO_TOD,PO_TC,CREATED_DATE,CREATED_BY)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,CURRENT_DATE(),?)`;
 
   db.query(sql,[podocno,porevno,ponumber,poquotationref,poproject,popaymentmode,povendor,pocode,pophone,pocpperson,pomobile,poemail,povat,poadd,postartdate,poenddate,polocation,pomobilizationdate,podesc,pototal,pogst,pograndtotal,instruction,deliveryTerms,conditionTerms,createdBy], (error, results) => {
   
   if (error) throw error;
 //db.execute("commit");
   res.send(results.rows);
 })

});


app.post("/insertRespForm", (req, res) =>{
	
  console.log("Test values in services req values :", req.body.taskList);
  console.log("Test values in services req values :", req.body.taskList[0].description);

	const taskList = req.body.taskList;
	const testLenth = 3;
	const poId = 1231;
	
	//  const sql = `insert into RESP_FORM(RESPID,YEAR,TEACHER_ID,TEACHER_NAME,CREATEDATE,ROWCOUNT,SUBJECT_NAME,CLASS_NAME,GRADE_NAME,TIMINGS) VALUES (:responseId,:testYear,:testteachers,ms_edu_db_package.GETTEACHERSNAME(:testTeachName),sysdate,:testRow,:testsubjectName,:teststandardName,:testgradeName,:testtimings)`;
	
      const sql = `INSERT INTO MS_ENT_PURCHASE_ORDER_OIT(PO_ID,PO_ROW,PO_DESC,UNIT_DD,QUANTITY,UNIT_RATE,UNIT_AMOUNT)VALUES(?,?,?,?,?,?,?)`;

		for (var i=0; i< testLenth; i++){
		// console.log(testData.taskList[i].subjectName);
		db.query(sql,[poId,i,taskList[i].description,taskList[i].unit,taskList[i].qty,taskList[i].unit_rate,taskList[i].amount], (error, results) => {
    if (error) throw error;
	  // db.execute("commit");
    res.send(results.rows);
  })
 }	
});


app.post("/insertRespForm123", (req, res) =>{
	
  console.log("Test values in services req values :", req.body.taskList);
  console.log("Test values in services req values :", req.body.taskList[0].description);

	const taskList = req.body.taskList;
	const testLenth = 3;
	const poId = 1231;
	
	//  const sql = `insert into RESP_FORM(RESPID,YEAR,TEACHER_ID,TEACHER_NAME,CREATEDATE,ROWCOUNT,SUBJECT_NAME,CLASS_NAME,GRADE_NAME,TIMINGS) VALUES (:responseId,:testYear,:testteachers,ms_edu_db_package.GETTEACHERSNAME(:testTeachName),sysdate,:testRow,:testsubjectName,:teststandardName,:testgradeName,:testtimings)`;
	
      const sql = `INSERT INTO MS_ENT_PURCHASE_ORDER_OIT(PO_ID,PO_ROW,PO_DESC,UNIT_DD,QUANTITY,UNIT_RATE,UNIT_AMOUNT)VALUES(?,?,?,?,?,?,?)`;

		for (var i=0; i< testLenth; i++){
		// console.log(testData.taskList[i].subjectName);
		db.execute(sql,[poId,i,taskList.description[i],taskList.unit[i],taskList.qty[i],taskList[i].unit_rate,taskList[i].amount], (error, results) => {
    if (error) throw error;
	  db.execute("commit");
    res.send(results.rows);
  })
 }	
});


app.post("/insertRespForm2", (req, res) =>{
	
  console.log("Test values in services req values :", req);
  //   console.log("Test values NAme :", req.podate);
    
   const  poid = req.body.poid; 
   const  podocno = req.body.podocno;
   const  podate = req.body.podate;
   const  porevno = req.body.porevno;
   const  ponumber = req.body.ponumber;
   const  poquotationref = req.body.poquotationref;
   const  poproject = req.body.poproject;
   const  popaymentmode = req.body.popaymentmode;
   const  povendor = req.body.povendor;
   const  pocode = req.body.pocode;
   const  pophone = req.body.pophone;
   const  pocpperson = req.body.pocpperson;
   const  pomobile = req.body.pomobile;
   const  poemail = req.body.poemail;
   const  povat = req.body.povat;
   const  poadd = req.body.poadd;
   const  postartdate = req.body.postartdate;
   const  poenddate = req.body.poenddate;
   const  polocation = req.body.polocation;
   const  pomobilizationdate = req.body.pomobilizationdate;
   const  podesc = req.body.podesc;
   const  pototal = req.body.pototal;
   const  pogst = req.body.pogst;
   const  pograndtotal = req.body.pograndtotal;
   const  instruction = req.body.instruction;
   const  deliveryTerms = req.body.deliveryTerms;
   const conditionTerms = req.body.conditionTerms;
   const createdBy = "Mazhar";
   const taskList = req.body.taskList;
   const testLenth = 3;



   const sql1 = `INSERT INTO MS_ENT_PURCHASE_ORDER_OIT(PO_ID,PO_ROW,PO_DESC,UNIT_DD,QUANTITY,UNIT_RATE,UNIT_AMOUNT)VALUES(?,?,?,?,?,?,?)`;

   for (var i=0; i< testLenth; i++){
   // console.log(testData.taskList[i].subjectName);
   db.query(sql1,[poid,i,taskList[i].description,taskList[i].unit,taskList[i].qty,taskList[i].unit_rate,taskList[i].amount], (error, results) => {
   if (error) throw error;
   // db.execute("commit");
   res.send(results.rows);
 })
}	

   const sql = `INSERT INTO MS_ENT_PURCHASE_ORDER(PO_ID,DOC_NO,REV_NO,WO_NUMBER,WO_QUO_REF,WO_PROJECT,WO_PAYMENT_MODE,VI_VENDOR,VI_CODE,VI_PH_NO,VI_CONTACT_PERSON,VI_MOBILE,VI_EMAIL,VI_VAT,VI_ADDRESS,WS_START_DATE,WS_END_DATE,WS_LOC,WS_MOB_DATE,WS_DESC,PO_TOTAL,PO_GST,PO_GRANDTOTAL,PO_INSTRUCTION,PO_TOD,PO_TC,CREATED_DATE,CREATED_BY)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,CURRENT_DATE(),?)`;
 
   db.query(sql,[poid,podocno,porevno,ponumber,poquotationref,poproject,popaymentmode,povendor,pocode,pophone,pocpperson,pomobile,poemail,povat,poadd,postartdate,poenddate,polocation,pomobilizationdate,podesc,pototal,pogst,pograndtotal,instruction,deliveryTerms,conditionTerms,createdBy], (error, results) => {
   
   if (error) throw error;
 //db.execute("commit");
   res.send(results.rows);
 })

});


app.get("/stichfulldata", (req, res) => {
  // Connecting to the database.
  // Executing the MySQL query (select all data from the 'users' table)
  // db.query("select * from react_schema.stichpad", (error, results) => {
    db.query("select stich_id,stich_name ,stich_gender ,date_format(stich_creatdate,'%m/%d/%Y') as stich_creatdate ,date_format(stich_closdate,'%m/%d/%Y') as stich_closdate ,stich_neck ,stich_chest ,stich_stomach ,stich_belly ,stich_sidecut ,stich_tophght ,stich_waist ,stich_hip ,stich_thigh ,stich_lthigh ,stich_ankle ,stich_desc,dummy1,stich_status from react_schema.stichpad", (error, results) => {
    // If some error occurs, we throw an error.
    if (error) throw error;
    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results);
  });
});


app.get("/getMaxId", (req, res) =>{
  db.query("select max(stich_id) as ID from react_schema.stichpad", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})


app.listen(3009, () => {
  console.log("Server is up and running on port 3009");
});

module.exports = db;
