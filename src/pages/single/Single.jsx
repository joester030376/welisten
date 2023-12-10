import './single.scss';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Chart from '../components/chart/Chart';
import List from '../components/table/Table';
import Settings from '../components/settings/Settings';
import Assets from '../../assests';

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
              <img src={Assets.images.item} alt="" className="itemImg" />              
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">555-444-3333</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Elton St. 234 Garden Yd, Ney York</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">USA:</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title={"User Spending (Last 6 Months)"}/>
          </div>
        </div>
        <div className="bottom">
       
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>  
      <Settings />    
    </div>
  )
}

export default Single;