import { TEST_DISPATCH } from "./types";

export const registeruser = userdata => {
  return {
    type: TEST_DISPATCH,
    payload: userdata
  };
};
