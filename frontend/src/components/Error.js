import styled from "styled-components";
import React from "react";
//apollo graphql error handlers
//only visible if errror is there
const ErrorStyles = styled.div`
  color: red;
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorStyles>
  );
};

export default DisplayError;
