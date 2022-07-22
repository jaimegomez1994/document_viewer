const inititalState = [];
const addReducer = (state = inititalState, action) => {
    switch (action.type) {
      case "ADDDATA": {
        return { ...state, ...action.payload };
      }
      default: {
        return state;
    }
  }
};
export default addReducer;