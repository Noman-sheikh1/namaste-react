import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import "@testing-library/jest-dom"
import { fireEvent, render,screen } from "@testing-library/react";
import appStore from "../../utils/appStore";

test("it should render header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    );
    const loginbtn=screen.getByRole("button");
    expect(loginbtn).toBeInTheDocument();
});
test("it should render header component with cart items ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    );
    const cart=screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
});
test("it should render header component with  login btn to logout btn ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    );
    const loginbtn=screen.getByRole("button",{name:"login"});
    fireEvent.click(loginbtn);
    const logOutbtn=screen.getByRole("button",{name:"logout"});
    expect(logOutbtn).toBeInTheDocument();
});