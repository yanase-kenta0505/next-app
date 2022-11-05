import { atom } from "recoil";
import { Status } from "../types";

export const statusState = atom<Status>({
  key: 'status',
  default: 'all'
})