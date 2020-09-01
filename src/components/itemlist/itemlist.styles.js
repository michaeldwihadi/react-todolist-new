import { css } from "@emotion/core";

export const todo = () =>
  css`
    padding: 10px;
    border-bottom: 1px solid #e2e0dd;
    text-align: center;
  `;

export const todoList = () =>
  css`
    background: #fefefe;
  `;

export const editButton = ({ theme }) =>
  css`
    float: right;
    margin-right: 15px;
    height: 30%;
    background: ${theme.color.primary.green};
    border-radius: 3px;
    border: 1px solid ${theme.color.primary.green};
    padding: 2px 20px;
    color: white;
    cursor: pointer;
  `;

export const deleteButton = ({ theme }) =>
  css`
    float: right;
    margin-right: 15px;
    float: right;
    margin-right: 15px;
    height: 30%;
    background: ${theme.color.primary.red};
    color: white;
    border-radius: 3px;
    border: 1px solid ${theme.color.primary.red};
    padding: 2px 20px;
    cursor: pointer;
  `;
