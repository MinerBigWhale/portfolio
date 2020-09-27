import React from "react";

export const ProjectCategoryComponent = (props) => {
  return (
    <li data-filter={props.val} onClick={props.onClick}>
      <a href="javaScript:void(0);" id={props.val}>
        {props.val}
      </a>
    </li>
  );
};
