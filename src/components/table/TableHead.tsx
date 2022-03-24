import React from "react";

const TableHead: React.FC<{ headColumnsName: string[] }> = ({
  headColumnsName,
}) => {
  return (
    <thead>
      <tr className="p-4">
        {headColumnsName.map((v) => (
          <th className="w-20 font-semibold leading-normal text-lg inline-flex items-center">
            {v}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
