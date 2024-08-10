import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
test("should load content us component",()=>{
    render(<Contact />);
    const heading =screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
test("should load content text submit component",()=>{
    render(<Contact />);
    const submitbtn =screen.getByText("submit");
    expect(submitbtn).toBeInTheDocument();
});
test("should load content placeholder name component",()=>{
    render(<Contact />);
    const inputName =screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
});  