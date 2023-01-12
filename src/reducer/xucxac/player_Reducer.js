const initState = {
  history: { win: 0, bet: 0 },
  nowPlace: "",
};
const player = (state = initState, action) => {
  switch (action.type) {
    case "PALACED_TAI": {
      console.log("ALL IN TÀI");
      return {
        ...state,
        nowPlace: "TAI",
      };
    }
    case "PALACED_XIU": {
      console.log("ALL IN XỈU");
      return {
        ...state,
        nowPlace: "XIU",
      };
    }
    case "WIN": {
      console.log("LỤM TIỀN");
      const cloneHistory = { ...state.history };
      cloneHistory.win += 1;
      cloneHistory.bet += 1;
      return {
        ...state,
        history: cloneHistory
      }
    }
    case "LOSS": {
      console.log("MẤT TIỀN");
      const cloneHistory = { ...state.history };
      cloneHistory.bet += 1;
      return {
        ...state,
        history: cloneHistory
      }
    }
    default: {
      return state;
    }
  }
};
export default player;
