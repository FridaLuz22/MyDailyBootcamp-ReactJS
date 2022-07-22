import React from 'react';

function Main({children}){
  return <div className="main">{children}</div>
}

function SidebarLeft({children}){
  return <div className="sidebar-left">{children}</div>
}

function DailyContent({children}){
  return <div className="daily-content">{children}</div>;
}

function SidebarRight({children}){
  return <div className="sidebar-right">{children}</div>;
}

export{SidebarLeft,DailyContent,SidebarRight,Main}