import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, refreshToken } from "../store/slices/user";
const Welcome = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  let firstRender = true;
  React.useEffect(() => {
    if (firstRender) {
      firstRender = false;
      dispatch(getUser());
    }
    let interval = setInterval(() => {
      dispatch(refreshToken());
    }, 1000 * 28);

    return () => clearInterval(interval);
  }, []);
  return <div>{user && <h1>{user.name}</h1>}</div>;
};

export default Welcome;
