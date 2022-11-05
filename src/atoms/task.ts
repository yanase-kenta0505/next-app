import { atom } from "recoil"

export const taskState = atom<string>({
  key: 'taskState',
  default: ''
})