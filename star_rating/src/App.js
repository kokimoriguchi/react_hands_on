import React, {useState} from "react";
import colorData from "./color_data.json";
import ColorList from "./ColorList.jsx"
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";

//親コンポーネントのindexで呼び出されcolorsにuseStateでステート値管理しているを子コンポーネントのColorListの渡しながら呼び出し。
//ColorListから渡されたonRemoveColorプロパティにアロー関数で引数idを取りcolors.filterで新しい配列で更新している。
//更新すると再描画され最初から存在しなかったようにプロパティが渡されていく。
//データはプロパティ経由でコンポーネントツリーを上から下に降りていき、ユーザーの処理はしたから上に昇ってくる
export default function App() {
  const [colors, setColors] = useState(colorData);
  return(
    <>
      <AddColorForm
        onNewColor={( title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRateColor={( id, rating ) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  )
}



