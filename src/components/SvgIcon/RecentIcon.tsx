import React from "react";

const RecentIcon = ({ style = {}, fill = "none", innerFill = "#C5D0DB", width = "20", height = "20", className = "", viewBox = "0 0 20 20" }) => (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M10.4 6.00001C10.4 5.50295 9.99706 5.10001 9.50001 5.10001C9.00295 5.10001 8.60001 5.50295 8.60001 6.00001V10.5C8.60001 10.8752 8.83272 11.211 9.184 11.3427L13.184 12.8427C13.6494 13.0172 14.1682 12.7814 14.3427 12.316C14.5172 11.8506 14.2814 11.3318 13.816 11.1573L10.4 9.87631V6.00001Z" fill="#99A2AD"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 0.100006C4.53239 0.100006 0.100006 4.53239 0.100006 10C0.100006 15.4676 4.53239 19.9 10 19.9C15.4676 19.9 19.9 15.4676 19.9 10C19.9 4.53239 15.4676 0.100006 10 0.100006ZM1.90001 10C1.90001 5.5265 5.5265 1.90001 10 1.90001C14.4735 1.90001 18.1 5.5265 18.1 10C18.1 14.4735 14.4735 18.1 10 18.1C5.5265 18.1 1.90001 14.4735 1.90001 10Z" fill="#99A2AD"/>
    </svg>


);

export default RecentIcon;
