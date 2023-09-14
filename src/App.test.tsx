import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test("renders home page by default", () => {
    render(<App />);
    const homePage = screen.getByText(
      /Alle wichtigen Infos über Politiker:innen in einer App./i
    );
    expect(homePage).toBeInTheDocument();
  });

  test("renders about us page when about us link is clicked", () => {
    render(<App />);
    const aboutUsLink = screen.getByRole("link", { name: /about us/i });
    userEvent.click(aboutUsLink);
    const aboutUsPage = screen.getByText(
      /Our mission is to promote critical thinking/i
    );
    expect(aboutUsPage).toBeInTheDocument();
  });

  test("renders contact page when contact link is clicked", () => {
    render(<App />);
    const contactLink = screen.getByRole("link", { name: /contact/i });
    userEvent.click(contactLink);
    const contactPage = screen.getByText(/Get in touch with us/i);
    expect(contactPage).toBeInTheDocument();
  });
});
