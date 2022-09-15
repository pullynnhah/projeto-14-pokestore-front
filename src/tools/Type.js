export default function Type(type) {
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

  if (!types.includes(type)) {
    type = "default";
  }
  return type;
}
