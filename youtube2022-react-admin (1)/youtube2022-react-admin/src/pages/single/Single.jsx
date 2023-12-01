import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart1";
import List from "../../components/table/Table";
import Chart1 from "../../components/chart/Chart1";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              
              <div className="details">
                <h1 className="itemTitle">Project 1</h1>
                <div className="detailItem">
                  <span className="itemKey">Update Here: </span>
                  <label className="statusLabel">
                <input type="radio" name="status" value="Started" />
                Started
              </label>
              <label className="statusLabel">
                <input type="radio" name="status" value="Pending" />
                Pending
              </label>
              <label className="statusLabel">
                <input type="radio" name="status" value="Finished" />
                Finished
              </label>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Comments: </span>
                  <textarea
                className="commentBox"
                placeholder="Type your comments here..."
              />
                </div>
                
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart1 aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;

// Single.js

// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";

// const Single = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="statusButtons">
//               <button className="started">Started</button>
//               <button className="pending">Pending</button>
//               <button className="finished">Finished</button>
//             </div>
//           </div>
//           <div className="editButton">Edit</div>
//         </div>
//         <div className="item">
//           <div className="details">
//             <h1 className="itemTitle">Project 1</h1>
//             <div className="detailItem">
//               <span className="itemKey">Customer:</span>
//               <span className="itemValue">Jane Doe</span>
//             </div>
//             <div className="detailItem">
//               <span className="itemKey">Phone:</span>
//               <span className="itemValue">+1 2345 67 89</span>
//             </div>
//             <div className="detailItem">
//               <span className="itemKey">Address:</span>
//               <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
//             </div>
//             <div className="detailItem">
//               <span className="itemKey">Country:</span>
//               <span className="itemValue">USA</span>
//             </div>
//             <div className="detailItem">
//               <span className="itemKey">Amount:</span>
//               <span className="itemValue">$500,000,000</span>
//             </div>
//           </div>
//         </div>
//         <textarea
//           className="commentBox"
//           placeholder="Enter your comments here..."
//         />
//       </div>
//     </div>
//   );
// };

// export default Single;
