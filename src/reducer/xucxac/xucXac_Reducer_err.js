const initState = {
  status: "TAI",
  dices: [
    { point: 1, image: "./img/gameXucxac/1.png" },
    { point: 2, image: "./img/gameXucxac/3.png" },
    { point: 6, image: "./img/gameXucxac/6.png" },
  ],
};
// const rollTheDices = () => {
//   let cloneDices = [...initState.dices];
//   cloneDices.forEach((dice) => {
//     let newValue = Math.floor(Math.random() * 6 + 1);
//     dice.point = newValue;
//     dice.image = `./img/gameXucxac/${newValue}.png`;
//   });
//   const score = initState.dices.reduce((initScore, dice) => {
//     return (initScore += dice.point);
//   }, 0);
//   if (score <= 11) initState.status = "TAI";
//   if (score >= 12) initState.status = "XIU";
//   console.log(initState);
//   return initState;
// };

const xucxac = (state = initState, action) => {
  const rollTheDices = () => {
    // copy State
    let cloneInitial = { ...state };
    console.log("Copy", cloneInitial);
    let cloneDices = [...cloneInitial.dices];
    cloneDices.forEach((dice) => {
      let newValue = Math.floor(Math.random() * 6 + 1);
      dice.point = newValue;
      dice.image = `./img/gameXucxac/${newValue}.png`;
    });
    // for (let dice of cloneDices) {
    //   let newValue = Math.floor(Math.random() * 6 + 1);
    //     dice.point = newValue;
    //     dice.image = `./img/gameXucxac/${newValue}.png`;
    // }
    const score = cloneInitial.dices.reduce((initScore, dice) => {
      return (initScore += dice.point);
    }, 0);
    if (score <= 11) cloneInitial.status = "TAI";
    if (score >= 12) cloneInitial.status = "XIU";
    return cloneInitial;
  };
  switch (action.type) {
    case "RÚT_CÁI_TAY_RA": {
      //Tại sao ở đây thông tin mảng 'dices' trước khi chạy hàm rollTheDices
      //và sau khi chạy hàm rollTheDices lại giống nhau, dù đã clone rồi.
      // trong khi đó 'status' lại thay đổi
      console.log("chưa xóc", state);
      const newState = rollTheDices();
      console.log("xóc xong", newState);
      // console.log(state);
      return {
        ...state,
        status: newState.status,
        dices: newState.dices,
      };
    }
    default:
      return state;
  }
};
export default xucxac;
