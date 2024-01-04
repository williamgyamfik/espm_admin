import { Bar } from "react-chartjs-2";

import React from "react";

const Chart = () => {
  return (
    <Bar
      data={{
        labels: ["Soccer", "Boxing", "Other Sports"],
        datasets: [
          {
            label: "Number sports type",
            data: [30, 50, 100],
            borderWidth: 1,
          },
        ],
      }}
      height={400}
      options={{
        scales: {
          y: {
            type: "linear",
            beginAtZero: true,
            position: "left",
          },
          x: {
            type: "category",
            position: "bottom",
          },
        },
      }}
    />
  );
};

export default Chart;

// import { Bar } from "react-chartjs-2";

// function Chart() {
//   return (
//     <div className="App">
//       <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
//       <div style={{ maxWidth: "650px" }}>
//         <Bar
//           data={{
//             // Name of the variables on x-axies for each bar
//             labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
//             datasets: [
//               {
//                 // Label for bars
//                 label: "total count/value",
//                 // Data or value of your each variable
//                 data: [1552, 1319, 613, 1400],
//                 // Color of each bar
//                 backgroundColor: ["aqua", "green", "red", "yellow"],
//                 // Border color of each bar
//                 borderColor: ["aqua", "green", "red", "yellow"],
//                 borderWidth: 0.5,
//               },
//             ],
//           }}
//           // Height of graph
//           height={400}
//           options={{
//             maintainAspectRatio: false,
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     // The y-axis value will start from zero
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//             },
//             legend: {
//               labels: {
//                 fontSize: 15,
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Chart;
