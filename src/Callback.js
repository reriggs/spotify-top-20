import { useEffect, useMemo, useState } from "react";
import { Redirect } from "react-router-dom";

function Callback(props) {
    const query = useMemo(() => new URLSearchParams(props.location.search), [props.location.search]);
    const onSuccess = props.onSuccess;
    const state = query.get("state");

    const [redirect, setRedirect] = useState(false);

    useEffect( () => {
        console.log('callback: ' + query)
    }, [query, onSuccess]);

    if (redirect) {
        console.log('redirecting');
        return (
            <Redirect to='/' />
        )
    } else {
        return (
            <></>
        )
    }
    
}


export default Callback;