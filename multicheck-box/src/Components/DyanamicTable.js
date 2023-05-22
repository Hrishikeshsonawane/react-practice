import React, { useState } from 'react';

const DynamicTable = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [tableData, setTableData] = useState([]);

  const handleRowsChange = (event) => {
    setRows (event.target.value) ;
  };

  const handleColumnsChange = (event) => {
    setColumns (event.target.value) ;
  };

  const generateTable = () => {
    const table = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(
          <td key={i+j} className="cell">
            Row {i + 1}, Column {j + 1}
          </td> 
        );
      }
      table.push(<tr key={i} >{row}</tr>);
    }
    setTableData(table);
  };

  return (
    <div className="table-container">
      <label>
        Rows:
        <input type="number" value={rows} onChange={handleRowsChange} />
      </label>
      <label>
        Columns:
        <input type="number" value={columns} onChange={handleColumnsChange} />
      </label>
      <button onClick={generateTable}>Generate Table</button>
      <table className="table">
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default DynamicTable;

 