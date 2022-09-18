export default function typeFinder(type, removeNull = true) {
  const types = [
    "grass",
    "fire",
    "water",
    "normal",
    "poison",
    "electric",
    "ground",
    "psychic",
    "bug",
  ];

  if (removeNull && !types.includes(type)) {
    type = "default";
  }
  return type;
}
