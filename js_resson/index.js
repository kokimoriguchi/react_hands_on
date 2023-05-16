//first_nameとlast_nameを仮引数名として受け取っているだけのアロー関数
const app = (first_name, last_name) => `${first_name}${last_name}です`
console.log(app("jody", "nash"));

//ここの引数first, lastは仮変数で受け取った値をとりあえずこの仮変数に入れてfirst_nameとlast_nameのオブジェクトにした値を返すようにしている
const person = (first, last) => ({
  first_name: first,
  last_name: last
});

//ここではperson関数の戻り値オブジェクトの値に引数としてfirst_name: wade, last_name: walkerをpersonに入れているだけ。
console.log(person("wade", "walker"))

const players = {
  names: ["wade", "rose", "james", "allen", "curry"],
  playerIndex: function() {
    console.log(this.names.join(", "));
  }
};
players.playerIndex();

const sand = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  topping: ["lettuce", "tomato", "mustard"]
};

bread = "garlic";
meat = "turkey";

console.log(bread);
console.log(meat);
console.log(sand.bread, sand.meat);