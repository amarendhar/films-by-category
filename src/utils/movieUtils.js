export const getValues = (list = [], separator = ", ") => {
  return list.map((language) => language?.name).join(separator);
};

export const formateValue = (value) => value.toLocaleString("en-US");

export const getRating = (value) => `${value.toFixed(1)}/10`;

export const hasItem = (list, id) => !!list.find((list) => list.id === id);
