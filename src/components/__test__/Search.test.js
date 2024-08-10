import Body from "../Body";
import { render ,screen,act, fireEvent} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});
test("should render the body component with Search",async ()=> {
    
    await act(async ()=>
        render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>)
    );
    const searchbtn=screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchbtn);
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);


});
test("should filter the top rated restaurant ",async ()=> {
    
    await act(async ()=>
        render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>)
    );
    const cardsBeforFilter=screen.getAllByTestId("resCard");
    expect(cardsBeforFilter.length).toBe(8);
    const filterBtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(filterBtn);
    const cardsAfterFilter=screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(8);


});