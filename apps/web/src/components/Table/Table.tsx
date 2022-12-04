import React from "react";

const Table = ({ deals }: any) => {
  return (
    <table className="table-fixed text-left rounded-lg overflow-hidden w-full">
      <thead className="border-b border-slate-600 text-slate-200 bg-slate-900 ">
        <tr>
          <th className="py-4 px-8">dealId</th>
          <th className="py-4 px-8">cid</th>
          <th className="py-4 px-8">size</th>
          <th className="py-4 px-8">verified</th>
          <th className="py-4 px-8">price_per_epoch</th>
          <th className="py-4 px-8">start</th>
          <th className="py-4 px-8">end</th>
        </tr>
      </thead>
      <tbody className="bg-slate-800 text-slate-400">
        {deals.map(
          ({
            dealId,
            cid,
            size,
            verified,
            price_per_epoch,
            start,
            end,
          }: any) => (
            <tr className="border border-slate-700">
              <td className="py-4 px-8 ">{dealId}</td>
              <td className="py-4 px-8 break-words	">{cid}</td>
              <td className="py-4 px-8">{size}</td>
              <td className="py-4 px-8">{verified.toString()}</td>
              <td className="py-4 px-8">{price_per_epoch}</td>
              <td className="py-4 px-8">{start}</td>
              <td className="py-4 px-8">{end}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
