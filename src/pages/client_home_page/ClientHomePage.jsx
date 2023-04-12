import React from 'react';
import UpPanelHomePage from "../../components/UI/up_panel_home_page/UpPanelHomePage";
import ClientStock from "../../components/UI/client_stock/ClientStock";


const ClientHomePage = () => {
    return (
        <div>
            <UpPanelHomePage/>
            <ClientStock/>

        </div>
    );
};

export default ClientHomePage;