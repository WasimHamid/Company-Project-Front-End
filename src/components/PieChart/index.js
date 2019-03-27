import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";



const session = [
  {
    impact: [1, 2, 3, 3, 4],
    potentialCategory: Array,
    potential: Array,
    overallImpact: Number,
    overallPotentialCategory: Number,
    overallPotential: Number,
    dateLastReviewed: Date,
    editHistory: Array,
    userCreatedSession: String,
    successionPlan: String,
    managerComments: String
  }
];
/// this is what this does

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPie: {
        labels: ["1 star", "2 star", "3 star", "4 star", "5 star"],

        datasets: [
          {
            data: [1,3,3,4,5], /// the impact data need to be pulled in here. 
                                                    // I need to aggrgate / count this data. 
                                                    /// count, how many time, 1 appears, 2 appears...
                                                    /// I will end up with an array of [key:value] which looks like label = key, and the value = the data. 
                                                    /// create readme files. writing doc for the api. technical documentation
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774"
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5" /> impact score
        <Pie data={this.state.dataPie} options={{ responsive: true }} height='50%' />
      </MDBContainer>
    );
  }
}

export default PieChart;
