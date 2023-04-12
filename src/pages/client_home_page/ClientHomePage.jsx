import React from 'react';
import UpPanelHomePage from "../../components/UI/up_panel_home_page/UpPanelHomePage";
import ClientStock from "../../components/UI/client_stock/ClientStock";
import ClientMain from "../../components/UI/client_main/ClientMain";


const ClientHomePage = () => {
    return (
        <div>

            <UpPanelHomePage/>
            {/*<ClientStock/>*/}
            <ClientMain/>


        </div>
    );
};

export default ClientHomePage;