import React, {useState} from "react";
import { Star } from "./Star";

//Array.mapで繰り返し取り出しそれらをStarコンポーネントに変換して返している
export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}