import RestaurantCard from "../RestaurantCard";
import { render, screen } from '@testing-library/react';

import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

test("should render ReastaurantCard component with props data",()=>{
   render(<RestaurantCard resData={MOCK_DATA}/>);
   const name=screen.getByText("Roast Chicken Melt Sandwich + Side + Coke");
   expect(name).toBeInTheDocument();
});