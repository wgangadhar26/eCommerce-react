import React from 'react';
import ColumnChart from './column-chart/ColumnChart';
import IconsChart from './icons-chart/IconsChart';
import LoggedInUser from './logged-in-user/LoggedInUser';
import SideNav from './side-nav/SideNav';
import DoughnutCustomerChart from './doughnut-customer-chart/DoughnutCustomerChart';
import ProductTable from './product-table/ProductTable';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <SideNav />
      <div className='main-content'>
        <LoggedInUser />
        <div className='align-content'>
          <IconsChart />
          <div className='empty-div'>&nbsp;</div>
          <div className='charts-row'>
            <div className='column-chart'>
              <ColumnChart />
            </div>
            <div className='doughnut-chart'>
              <DoughnutCustomerChart />
            </div>
          </div>
        </div>
        <div className='empty-div'>&nbsp;</div>
        <div className='product-table'>
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default App;