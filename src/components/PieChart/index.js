import React from "react";
// import { Pie } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";

import Chart from "react-minimal-pie-chart";

// NOTE: The DB looks like this
// const session = [
//   {
//     impact: [1, 2, 3, 3, 4],
//     potentialCategory: Array,
//     potential: Array,
//     overallImpact: Number,
//     overallPotentialCategory: Number,
//     overallPotential: Number,
//     dateLastReviewed: Date,
//     editHistory: Array,
//     userCreatedSession: String,
//     successionPlan: String,
//     managerComments: String
//   }
// ];
/// this is what this does

// const impact = [1, 2, 5, 5, 5, 3, 3, 2, 1, 1, 1, 5, 4, 4, 5, 5, 5, 5];
// const total = [0, 0, 0, 0, 0];
// for (let i = 0; i < impact.length; i++) {
//   const value = impact[i];
//   const index = value - 1;
//   total[index] = total[index] + 1
// }

const PieChart = ({ values }) => {
  if (!values || values.length === 0) {
    return <div>No data to show</div>;
  }
  /// this variable Pie Chart takes values. Whereas before it could take in an array.
  /// this change from a class with own state to a variables that it inherits
  /// it's also a function now.  TODO: Why is it a function?
  // console.log(values);

  const sortedUniques = [...new Set(values)].sort((a, b) => a - b); /// here the variable is the sorted scores from the array. Sorted Uniques. Set is a way of dealing with an array of these values.
  // console.log(sortedUniques);

  const numberOfTotals = sortedUniques[sortedUniques.length - 1]; // sort so that if a score is not given it doesn't break the code.
  // console.log(numberOfTotals);

  const count = values.reduce(
    // gives back a new array where the score is maps to the index number. you have to take one away so that it is mapped from idx 0.
    (acc, cur) => {
      const total = [...acc];
      const index = cur - 1;
      total[index] = total[index] + 1;
      return total;
    },
    Array(numberOfTotals).fill(0) // fill the array with 0s so that the count of scores can happen.
  );

  const colours = ["#9E3768", "#3366FF", "#1CB2BC", "#87D883", "#FFCD34"];

  const data = count.map((value, idx) => {
    return { title: idx + 1, value: value || 0, color: colours[idx] };
  });

  // console.log(data);
  return <Chart data={data} style={{ height: "20vh" }} />;
};

export default PieChart;
