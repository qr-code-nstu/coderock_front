import React, {useState} from 'react';
import UpPanelHomePage from "../../components/UI/up_panel_home_page/UpPanelHomePage";
import ClientStock from "../../components/UI/client_stock/ClientStock";
import ClientMain from "../../components/UI/client_main/ClientMain";


const ClientHomePage = () => {

    const [page, setPage] = useState(1)

    return (
        <div>

            <UpPanelHomePage setPage={setPage}/>
            {
                (page === 0) ?
                    <ClientStock/> :
                    <div></div>
            }
            {
                (page === 1) ?
                    <ClientMain/> :
                    <div></div>
            }



        </div>
    );
};

export default ClientHomePage;