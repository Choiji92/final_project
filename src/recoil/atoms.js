import {atom} from 'recoil'

export const addressState = atom({
    key: 'addressState',
    default:''
})
export const contentState = atom({
  key: 'contentState',
  default:''
})
export const tagState = atom({
  key: 'tagState',
  default:[]
})

export const userShare = atom({
  key:"userShare",
  default:[]
});

export const hostShareAndMap = atom({
  key:"hostShare",
  default:[]
});

export const houseInfoMap = atom({
  key:"houseInfo",
  default:[]
});

export const houseDetailMap = atom({
  key:"houseDetail",
  default:[1,2,3]
});