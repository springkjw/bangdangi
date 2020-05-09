import React from 'react';

export default function Card({data, direction = 'horizontal'}) {
  return (
    <div className="card">
      <div>
        <img src="" />
      </div>

      <div>
        <div className="flex flex-row contracts">
          {data.contract.map((c, i) => (
            <div className="contract text-center" key={i}>{c}</div>
          ))}
        </div>
        <div className="title">{`${data.deposit}/${data.rent}`}</div>
        <div className="subtitle">관리비 {data.expense}만원</div>
        <div></div>
        <div className="flex flex-row keywords">
          {data.keywords.map((k, i) => (
            <div className="keyword text-center" key={i}>{k.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
