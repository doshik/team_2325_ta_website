import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./TopNavBar.css";

function TopNavBar() {
  const location = useLocation();
  const role = useSelector((state) => state.auth.user.accountType);

  return (
    <Nav className="topNavBar col-md-9 col-lg-10">
      {role !== "student" && role !== "professor" && (
        <>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/login"
              active={location.pathname === "/login"}
            >
              Welcome
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/FAQs"
              active={location.pathname === "/FAQs"}
            >
              FAQs
            </Nav.Link>
          </Nav.Item>
        </>
      )}
      {role === "student" && (
        <>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/home"
              active={location.pathname === "/home"}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/student/dashboard"
              active={location.pathname === "/student/dashboard"}
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/student/apply"
              active={location.pathname === "/student/apply"}
            >
              Open Applications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/student/interviews"
              active={location.pathname === "/student/interviews"}
            >
              Interview Scheduling
            </Nav.Link>
          </Nav.Item>
        </>
      )}
      {role === "professor" && (
        <>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/home"
              active={location.pathname === "/home"}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/prof/dashboard"
              active={location.pathname === "/prof/dashboard"}
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/prof/templates"
              active={location.pathname === "/prof/templates"}
            >
              Application Templates
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="topNavLink"
              href="/prof/templates"
              active={location.pathname === "/prof/templates"}
            >
              Interview Scheduling
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
}
export default TopNavBar;
