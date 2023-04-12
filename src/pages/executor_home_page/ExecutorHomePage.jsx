import React, {useState} from 'react';
import UpPanelHomePage from "../../components/UI/up_panel_home_page/UpPanelHomePage";
import ExecutorMain from "../../components/UI/executor_main/ExecutorMain";
import ExecutorStock from "../../components/UI/executor_stock/ExecutorStock";

const ExecutorHomePage = () => {

    const [page, setPage] = useState(1)

    return (
        <div>

            <UpPanelHomePage setPage={setPage}/>
            {
                (page === 0) ?
                    <ExecutorStock/> :
                    <div></div>
            }
            {
                (page === 1) ?
                    <ExecutorMain/> :
                    <div></div>
            }

        </div>
    );
};

export default ExecutorHomePage;