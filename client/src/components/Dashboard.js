import React,{Fragment, useState, useEffect} from "react";
import Sidebar from '../Sidebar';
import './Dashboard.css'
import Feed from '../Feed';
import { Button } from "@material-ui/core";

function Dashboard({ setAuth }) {

    const [name, setName] = useState("");

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard/", { method: "GET", headers: { token: localStorage.token } });
            const parseRes = await response.json();
            setName(parseRes.user_name);
        } catch (err) {
            console.error(err.message);
        }
    }

    const Logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    };

    useEffect(() => {
        getName();
    }, []);

    return (
        <Fragment>
            <div className="app">
                <Sidebar />
                <Feed />
                <h3>
                    Welcome User: {name}
                    <Button variant="outlined" className="button__Logout" fullWidth onClick={e => Logout(e)}>Logout</Button>
                </h3>
            </div>
        </Fragment>
    );
}
export default Dashboard;