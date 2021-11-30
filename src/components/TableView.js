import React from "react";
import StudentData from "./data/StudentData";

class TableView extends React.Component {
  render() {
    const data = this.props.getAllNames();

    let selectedStudents = data.map((item) => {
      return <option value={item.name}>{item.name}</option>;
    });

    const studentDataMap = StudentData.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.assignment}</td>
          <td>{item.difficultyRating}</td>
          <td>{item.enjoymentRating}</td>
        </tr>
      );
    });

    return (
      <div className="tableView">
        <h3 className="table-h3">Studenten scores</h3>
        <br />
        <div className="filter-table">
          <span>filter students</span>
          <select>{selectedStudents}</select>
        </div>
        <table>
          <thead>
            <th>Name</th>
            <th>Assignment</th>
            <th>Difficulty</th>
            <th>level of fun</th>
          </thead>
          <tbody>{studentDataMap}</tbody>
        </table>
      </div>
    );
  }
}

export default TableView;

