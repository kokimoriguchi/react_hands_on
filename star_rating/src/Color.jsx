import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";


//ColorListから展開して受け取った値を分割代入でそれぞれとして引数propsで受け取っている。それをsectionタグで囲った部分返している。その中でStarRating読んでいる。
//ここからオンクリックイベントでゴミ箱追加している。イベント発生したという情報だけColorList→Appと渡されていきAppのステートにて変化起きる。
export default function Color({ id, title, color, rating, onRemove = f => f, onRate = f => f }) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id) }>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => onRate(id, rating)}
      />
    </section>
  )
}