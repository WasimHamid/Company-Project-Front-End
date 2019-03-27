import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

/// create an collection of info called session and fill it 5 scores across the three questions....
// const session = {
//   potentialCategory: {
//     category: ["Team", "Functional", "Team", "Operational", "Team"]
//   },
//   impact: { score: [1, 5, 3, 3, 2] },
//   potentialScore: { categoryRating: [1, 2, 5, 4, 2] }
// };

const employees = [
  {
    staffNumber: "e1234567",
    firstName: "Chris",
    lastName: "Meah",
    email: "chris@santander.co.uk",
    department: "financial-technology",
    manager: "Vulcan",
    accessLevel: "1",
    dateLastReview: "23/03/2019"
  }
];

const sessions = [
  { employee: "Chris", Team: 1 },
  { employee: "Chris", Functional: 2 },
  { employee: "Chris", Organisational: 3 }
];

/// I need to get the number of times that each score is selected.
/// I am expecting to get.../
//potentialCategory
/// Team: 3
/// Functional: 1
/// Operational: 1

/// now get the average score from each question....
//// average from potentialCategory:
//// average from impact:
///potentialScore:

class ChartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBar: {
        labels: employees.map(item => item.firstName + " " + item.lastName),
       
        datasets: sessions
          .filter(session => session.employee === "Chris")
          .map(item => {
            console.log(item);
            let style = {
              backgroundColor: "#EA1D25",
              borderWidth: 1
            };

            if (item.Organisational < 2) {
              style = {
                backgroundColor: "#1CB2BC",
                borderWidth: 1
              };
            }
            else if (item.Organisational > 2) {
              style = {
                backgroundColor:"#EA1D25",
                borderWidth: 1
              };
            }

            return {
              label: item.employee,
              data: [item.Organisational],
              ...style
            };
          })
      },
      //   dataBar: {
      //     labels: ["September"],
      //     datasets: [
      //       {
      //         label: "Team",
      //         data: [12],
      //         backgroundColor: "#EA1D25",
      //         borderWidth: 1
      //       },
      //       {
      //         label: "Functional",
      //         data: [56],
      //         backgroundColor: "#1CB2BC",
      //         borderWidth: 1
      //       },
      //       {
      //         label: "Organisational",
      //         data: [12],
      //         backgroundColor: "#FFCD34",
      //         borderWidth: 1
      //       }
      //     ]
      //   },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
                labelString: "does this work?"
              },
              ticks: {
                beginAtZero: true,
                className: "Managers Rating",
                label: "Mangers Rating"
              }
            }
          ]
        }
      }
    };
  }

  // onChange = event => {
  //     const {value, data } = event.target;
  //     this.setState(() => ({
  //         [data]:value
  //     }));
  // };

  // potentialCategory = event => {
  //     event.preventDefault();

  //     fetch
  // }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Jane Smith Potential</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
