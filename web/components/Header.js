import React from 'react';

export default function Header({isTranslucent = false}) {
  return (
    <div className={`header w-screen h-16 z-50 flex px-6 flex-row items-center justify-between ${isTranslucent ? 'bg-transparent absolute top-0' : ''}`}>
      <a className="logo">
        <img src="/logo_main.png" alt="Logo" />
      </a>

      <a className="register">
        방 등록하기
      </a>
    </div>
  );
};
