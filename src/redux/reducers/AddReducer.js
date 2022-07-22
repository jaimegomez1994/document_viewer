const inititalState = [];
const addReducer = (state = inititalState, action) => {
    switch (action.type) {
      case "ADDDATA": {
        console.log("ADDDATA" + JSON.stringify({ ...state, ...action.payload }));

        return { ...state, ...action.payload };
      }
      default: {
        return state;
    }
  }
};
export default addReducer;