const initState = {
  status: "TAI",
  dices: [
    { point: 1, image: "./img/gameXucxac/1.png" },
    { point: 2, image: "./img/gameXucxac/2.png" },
    { point: 6, image: "./img/gameXucxac/6.png" },
  ],
};
const xucxac = (state = initState, action) => {
  switch (action.type) {
    case "RÚT_CÁI_TAY_RA": {
      let cloneDices = [...state.dices];
      cloneDices.forEach((dice) => {
        let newValue = Math.floor(Math.random() * 6 + 1);
        dice.point = newValue;
        dice.image = `./img/gameXucxac/${newValue}.png`;
      });
      let cloneStatus = state.status;
      const score = cloneDices.reduce((initScore, dice) => {
        return (initScore += dice.point);
      }, 0);
      if (score <= 11) cloneStatus = "TAI";
      if (score >= 12) cloneStatus = "XIU";
      return {
        ...state,
        status: cloneStatus,
        dices: cloneDices
      };
    }
    default:
      return state
  }
};
export default xucxac;
