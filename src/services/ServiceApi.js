import axios from "axios";
import UserContext from "./context/UserContext";
export const ServiceApi = (props) => {

    var token = "";

    const GetToken = () => {
        return token;
    }

    const SetToken = (varToken) => {
        token = varToken;
        console.log(token);
    }

    function ServiceRest(rest, uri, datas, callback, callbackCatch = () => { }) {
        const header = {
            "Content-type": "application/json",
            "Authorization": "Bearer " + token.accessToken,
            "Access-Control-Allow-Origin": "http://localhost:3000"
        }
        axios({
            method: rest,
            headers: header,
            url: "https://tasks-planner-api.herokuapp.com/" + uri,
            data: datas
        }).then((data) => {
            callback(data.data)
        }).catch(() => {
            callbackCatch()
        })
    }


    return (
        <UserContext.Provider value={{
            ServiceRest,
            GetToken,
            SetToken
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default ServiceApi;

