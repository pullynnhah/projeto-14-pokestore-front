export default function Type(type) {
  const types = [
    "grass",
    "fire",
    "water",
    "normal",
    "poison",
    "eletric",
    "ground",
    "psychic",
    "bug",
  ];

  if (!types.includes(type)) {
    type = "default";
  }
  return type;
}
