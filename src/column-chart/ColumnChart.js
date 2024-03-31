/* ColumnChart.js */
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const ColumnChart = () => {
    const options = {
        title: {
            text: "Overview",
            cornerRadius: 20
        },
        type: 'column',
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "Jan", y: 7, color: '#F2EFFF' },
                    { label: "Feb", y: 5, color: '#F2EFFF' },
                    { label: "Mar", y: 10, color: '#F2EFFF' },
                    { label: "Apr", y: 8, color: '#F2EFFF' },
                    { label: "May", y: 9, color: '#F2EFFF' },
                    { label: "Jun", y: 4, color: '#F2EFFF' },
                    { label: "Jul", y: 8, color: '#F2EFFF' },
                    { label: "Aug", y: 10, color: '#5A32EA' },
                    { label: "Sept", y: 9, color: '#F2EFFF' },
                    { label: "Oct", y: 8, color: '#F2EFFF' },
                    { label: "Nov", y: 7, color: '#F2EFFF' },
                    { label: "Dec", y: 8, color: '#F2EFFF' },
                ],
                dataSets: [{
                    borderRadius: 20
                }]
            }
        ],
        axisY: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function (e) {
                return "";
            }
        },
        axisX: {
            interval: 1,
            labelMaxWidth: 100,
            labelAngle: -45,
            labelFontFamily: "verdana0"
        },
    }
    return (
        <div className='w-full h-full bg-white flex flex-col rounded-2xl'>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}
export default ColumnChart;