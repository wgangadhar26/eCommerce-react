import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


const pieThickness = {
  id: 3,
  beforeDraw(chart) {
    chart.getDatasetMeta(0).data[0].outerRadius = 148
    chart.getDatasetMeta(0).data[1].innerRadius = 80
    chart.getDatasetMeta(0).data[1].outerRadius = 142
    chart.getDatasetMeta(0).data[2].innerRadius = 88
    chart.getDatasetMeta(0).data[2].outerRadius = 123
  }
}

ChartJS.register(ArcElement, pieThickness);

const data = {
  labels: '',
  datasets: [
    {
      label: '65% Total New Customers',
      data: [6, 18, 10],
      height: 250,
      backgroundColor: [
        '#F53396',
        '#623AEA',
        '#F1EFFC',
      ],
      borderWidth: 0,
    },
  ],
};


// const options = {
//   cutout: 72,
//   responsive: true,
//   maintainAspectRatio: true,
//   aspecRation: 1.4,

//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       enabled: false,
//     },
//     pieThickness
//   }
// };


const DoughnutCustomerChart = () => {
  return (
    <div className='w-full bg-white flex flex-col p-6 rounded-2xl '>
      <div>
        <h3 className='text-sm font-semibold md:text-base'>Customers</h3>
        <p className='text-xs text-slate-300 md:text-sm'>Customers that buy products</p>
      </div>
      <div className='flex items-center justify-center relative' >
        <div className='my-4 rounded-full bg-white p-2 shadow-lg shadow-slate-200'>
          <Doughnut data={data}
            options={{ maintainAspectRatio: true, responsive: true }} />
        </div>
        <div className='absolute w-[20%] text-center'>
          <p className='text-base font-semibold lg:text-m'>65% <span className='text-xs font-normal lg:text-sm'>Total New Customers</span></p>
        </div>
      </div>

    </div>
  )
}

export default DoughnutCustomerChart