import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Workspace = ({ children }) => <Container>{children}</Container>;

Workspace.propTypes = {
  children: propTypes.node,
};

export default Workspace;