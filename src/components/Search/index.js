import React from 'react';
 
const API_URL = "http://localhost:5000";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            staffNumber: "",
            firstName: "",
            lastName: ""
        }
    }


    function hancleClick() {
        fetch(`${API_URL}/employees`)
    .then(response => response.json())
    .then({payload}) =>
    this.setState(() => ({ staffNumber: payload.employee.staffNumber,  }))


}










































// handleSearchChange = () => {
//     fetch(`${API}/employees`)
//         .then(res => res.json())
//         .then(res => {
//             this.setState({
//                 staff: res.payload.employees
//             });
//         });
// };

// renderEmployee() {
//     if (this.state.staff.map(member => <div>{member.staffNumber}</div>));
// }

// render() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <button onClick={() => this.callSession}>Start New Session</button>
//                 <SearchField
//                     placeholder="Search by Employee ID"
//                     // onChange={this.handleSearchChange}
//                     onSearchClick={
//                         this.state.staff.staffNumber ? this.renderEmployee() : ""
//                     }
//                     classNames="test-class"
//                 />
//                 {/* {this.state.staff.map(member => (
//            <div>{member.staffNumber}</div>
//          ))} */}
//             </header>
//         </div>
//     );
// }
// }

// export default SearchField;