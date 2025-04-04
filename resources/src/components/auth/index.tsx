import Tabs from "../shared/tabs/Tabs";
import Login from "./forms/login/Login";
import Register from "./forms/register/Register";
import Wrapper from "./wrapper/Wrapper";

const Main = () => {
    return (
        <main>
            <Wrapper>
                <Tabs
                    props={{
                        tabs: [
                            {
                                header: "Login",
                                TabPanel: () => <Login />,
                            },
                            {
                                header: "Register",
                                TabPanel: () => <Register />,
                            },
                        ],
                    }} 
                />
            </Wrapper>
        </main>
    );
};

export default Main;
