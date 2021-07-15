import React, { useEffect, useState, useMemo } from "react";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import { TableHeader , Pagination, Search} from "../../DataTable";


const DataTable = () => {
    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 10;

    const headers = [
        { name: "Id", field: "Id", sortable: false },
        { name: "Vendor", field: "Vendor", sortable: false },
        { name: "Month", field: "Month", sortable: false },
        { name: "Year", field: "Year", sortable: false },
        { name: "Description", field: "Description", sortable: false },
        { name: "Plot No", field: "Plot No", sortable: false },
        { name: "Operator Name", field: "Operator Name", sortable: false },
        { name: "Expected W/Hrs", field: "Expected W/Hrs", sortable: false },
        { name: "Monthly Rate", field: "Monthly Rate", sortable: false },
        { name: "OT Rate", field: "OT Rate", sortable: false },
        { name: "HR Rate", field: "HR Rate", sortable: false },
        { name: "Total Hours", field: "Total Hours", sortable: false },
        { name: "Total OT", field: "Total OT", sortable: false },
        { name: "Total", field: "Total", sortable: false },
        { name: "Created Date", field: "Created Date", sortable: false },
        { name: "Created By", field: "Created By", sortable: false },
        { name: "Status", field: "Status", sortable: false },
    ];

    const getData = () => {
        showLoader();

        fetch("http://localhost:3009/getVenTimesheetData")
            .then(response => response.json())
            .then(json => {
                hideLoader();
                setComments(json);
                console.log(json);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const test=(data)=>{
      alert('hurrray :'+data);
    }

    const monthDispValue = (value) => {
        let output;

        switch (parseInt(value)) {
            case 1:
              output = "Jan";
              break;
            case 2:
                output = "Feb";
              break;
            case 3:
                output = "Mar";
              break;
            case 4:
                output = "Apr";
              break;
            case 5:
                output = "May";
              break;
            case 6:
                output = "Jun";
                break;
            case 7:
                output = "Jul";
                break;
            case 8:
                output = "Aug";
                break;
            case 9:
                output = "Sep";
                break;
            case 10:
                output = "Oct";
                break;
            case 11:
                output = "Nov";
                break;
            case 12:
                output = "Dec";
          }
          console.log('switch value : ', output);   
          return output;
    }

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                comment.TS_VENDOR.toLowerCase().includes(search.toLowerCase()) ||
                comment.TS_OP_NAME.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);

    return (
        <>
        

        <div class="scrollbar square scrollbar-lady-lips thin">
        <div class="container" style={{ paddingTop: '3px', paddingLeft: '5px' }}>
        <div className="heading-layout1">
                    <div className="item-title">
                        <h3 style={{ padding: "50px" }}>View Timesheet</h3>
                    </div>
                    </div>
                    
            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        
                        <div className="col-md-6 d-flex flex-row-reverse" style={{marginBottom:'30px',marginLeft:'340px'}}>
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table table-striped">
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {commentsData.map(comment => (
                                <tr>
                                    <th scope="row" key={comment.VTS_ID}>
                                        {comment.VTS_ID}
                                    </th>
                                    <td onClick={()=>test(comment.VTS_ID)}>{comment.TS_VENDOR_DISP_NAME}</td>
                                    <td>{monthDispValue(comment.TS_MONTH)}</td>
                                    <td>{comment.TS_YEAR}</td>
                                    <td>{comment.TS_DESCRIPTION}</td>
                                    <td>{comment.TS_PLOT}</td>
                                    <td>{comment.TS_OP_NAME}</td>
                                    <td>{comment.TS_EXP_HOURS}</td>
                                    <td>{comment.TS_MONTH_RATE}</td>
                                    <td>{comment.TS_OT_RATE}</td>
                                    <td>{comment.TS_HR_RATE}</td>
                                    <td>{comment.TS_TOTAL_HOUR}</td>
                                    <td>{comment.TS_TOTAL_OT}</td>
                                    <td>{comment.TS_TOTAL}</td>
                                    <td>{comment.TS_GRID}</td>
                                    <td>{comment.CREATED_DATE}</td>
                                    <td>{comment.CREATED_BY}</td>
                                    <td>{comment.TS_STATUS}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
            </div></div></div>
            {loader}
        </>
    );
};

export default DataTable;