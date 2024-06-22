import React from 'react';

const TableComponent = () => {
  // Example data
  const data = [
    { serialno: 1, empId: 'E001', empname: 'John Doe', ngoname: 'NGO1', status: 'Active' },
    { serialno: 2, empId: 'E002', empname: 'Jane Smith', ngoname: 'NGO2', status: 'Inactive' },
    { serialno: 3, empId: 'E003', empname: 'Bob Johnson', ngoname: 'NGO3', status: 'Active' }
  ];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Employee Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-200">
              <th className="py-2 px-4 border-b">Serial No</th>
              <th className="py-2 px-4 border-b">Employee ID</th>
              <th className="py-2 px-4 border-b">Employee Name</th>
              <th className="py-2 px-4 border-b">NGO Name</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{row.serialno}</td>
                <td className="py-2 px-4 border-b">{row.empId}</td>
                <td className="py-2 px-4 border-b">{row.empname}</td>
                <td className="py-2 px-4 border-b">{row.ngoname}</td>
                <td className="py-2 px-4 border-b">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;