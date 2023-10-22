export const ProcessDirections = (data) => {
  data.forEach((item) => {
    if (item.direction && Array.isArray(item.direction)) {
      item.direction.forEach((dir) => {
        console.log(dir.step); // You can process or log each direction step here
      });
    }
  });
};

// Calling the function with your data
processDirections(recipe);
