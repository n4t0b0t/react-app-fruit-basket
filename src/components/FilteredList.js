import React from "react";

function FilteredList(props) {
  let filteredArr = [];
  if (props.text) {
    filteredArr = props.list.filter(element =>
      element.type.includes(props.text)
    );
  } else {
    filteredArr = props.list;
  }
  return filteredArr.map((element, index) => (
    <li key={index}>
      {element.type} {element.emoji}
    </li>
  ));
}

export default FilteredList;
