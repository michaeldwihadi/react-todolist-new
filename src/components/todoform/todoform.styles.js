import { css } from "@emotion/core";

export const todoForm = () =>
  css`
    margin-bottom: 35px;
  `;

export const inputForm = () =>
  css`
    width: 60%;
    border: 1px solid #e2e2e2;
    border-radius: 2px;
    padding: 5px;
  `;

export const submitButton = ({ theme }) =>
  css`
    width: 8%;
    color: white;
    cursor: pointer;
    background: ${theme.color.primary.blue};
    border: 1px solid ${theme.color.primary.blue};
    border-radius: 2px;
    padding: 5px;
    margin-left: 20px;
  `;
