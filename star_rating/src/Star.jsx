import { FaStar } from "react-icons/fa";
import React from "react";

export const Star = ({selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
