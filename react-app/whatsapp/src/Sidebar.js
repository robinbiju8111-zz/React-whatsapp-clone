import React from 'react';
import "./Sidebar.css";
import { EditAttributesSharp } from '@material-ui/icons';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { AirlineSeatFlat } from '@material-ui/icons';





function Sidebar() {
    return (
        <div className="sidebar_main">
            <div className="sidebar_header">
                <RadioButtonCheckedIcon />
                <EditAttributesSharp />
                <AcUnitIcon/>
                
            </div>
            <div className="sidebar_search">
                <AccountBalanceIcon />
                <AirlineSeatFlat/>
            </div>
            <div className="sidebar_chats">
                <EditAttributesSharp/>
            </div>
        </div>
    )
}


export default Sidebar;
