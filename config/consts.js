export const smallBP = (stack) => {
  return {
    padding: { left: 0, right: 20 },
    breakpoints: {
      1400: {
        perPage: 4,
        gap: 30,
        padding: { left: stack ? 0 : 60, right: 60 },
      },
      1000: {
        perPage: 3,
        padding: { left: stack ? 0 : 20, right: 20 },
      },

      768: {
        perPage: 1,
        padding: { left: stack ? 0 : 20, right: 140 },
        gap: 20,
      },
    },
  };
};
