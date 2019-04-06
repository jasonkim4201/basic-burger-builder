// going to make my redecuers leaner and more readable
export const updateObject = (oldObject, updatedProps) => {
  return {
    ...oldObject,
    ...updatedProps
  };
};