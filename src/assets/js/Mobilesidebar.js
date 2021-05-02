import React from "react";
import styled from "styled-components";
import { common } from "../../assets/js/common";
import { ImBook } from "react-icons/im";
import { Link } from "react-router-dom";

const MobileSidebarContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 0em 2em;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: ${common.fontOne};
    font-size: 1.5em;
    font-weight: bold;
    padding: 1em 0em;
  }

  .mbsb {
    color: #5296da;
    font-family: ${common.fontTwo};
    font-size: 1em;
  }
`;

const MobileSidebarItem = styled.div`
  .mbsb-link {
    text-decoration: none;
  }
`;

const Mobilesidebar = (props) => {
  return (
    <MobileSidebarContainer className="row d-lg-block d-md-block d-sm-block d-xl-none">
      <h3>Related Links</h3>

      {props.SidebarItems.map((item, index) => {
        return (
          <MobileSidebarItem key={index}>
            <ul>
              <Link to={item.path} className="mbsb-link">
                <ImBook style={{ marginRight: "10px" }} />
                <span className="mbsb">{item.title}</span>
              </Link>
            </ul>
          </MobileSidebarItem>
        );
      })}
    </MobileSidebarContainer>
  );
};

export default Mobilesidebar;
