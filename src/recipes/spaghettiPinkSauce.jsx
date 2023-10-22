import pasta from "../assets/pasta.jpg";

export const pinkSauce = [
  {
    recipeIngredient: "Boil Pasta",
    quantity: "1 large pot",
    direction: [
      {
        src: "../src/assets/boil.jpeg",
        step: "Boil Large pot of water, salted",
        duration: Number,
      },
      {
        src: "../src/assets/pasta.jpg",
        step: "Put in large noodles",
        durationTimer: 600,
      },
    ],
  },

  {
    recipeIngredient: "Onions",
    quantity: "1 large onion",
    direction: [
      {
        src: "../src/assets/redOnion.jpeg",
        step: "dice into squares",
        thenDuration: 300,
      },
    ],
    recipeIngredient: "Garlic",
    quantity: "4 cloves",
    direction: [
      {
        src: "img",
        step: "add chopped garlic",
        thenDuration: 120,
        completion: false,
      },
    ],
    recipeIngredient: "Sauce",
    quantity: "2 Bottles",
    direction: [
      {
        src: "../src/assets/raos.jpg",
        step: "add sauce to mixture",
        thenDuration: Number,
        completion: false,
      },
      {
        src: "img",
        step: "add dried oregano",
        thenDuration: Number,
        completion: false,
      },
      {
        src: "img",
        step: "add dried basil",
        thenDuration: Number,
        completion: false,
      },
      {
        src: "img",
        step: "add heavy cream",
        thenDuration: Number,
        completion: false,
      },
      {
        src: "img",
        step: "add cheese mix",
        thenDuration: Number,
        completion: false,
      },
      {
        src: "img",
        step: "add browned beef ",
        thenDuration: 480,
        completion: false,
      },
      {
        src: "img",
        step: "simmer and stir",
        thenDuration: 480,
        completion: false,
      },
    ],
  },
];
