import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Wiget from "../../components/wiget/Wiget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TableView from "../../components/table/TableView";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="wigets">
          <Wiget type="user"/>
          <Wiget type="order"/>
          <Wiget type="earning"/>
          <Wiget type="balence"/>
          
        </div>
        <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transations</div>
           <TableView/>
          </div>
      </div>
    </div>
  );
};

export default Home;
