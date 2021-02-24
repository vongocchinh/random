import * as  types from './../constant/home'

export const InputHome=(data)=>{
    return {
        type:types.HandleInput,
        data
    }
}

export const HandleDeleteDataArr=()=>{
    return{
        type:types.HandleDelete
    }
}
export const HandleDeleteData=()=>{
    return{
        type:types.HandleDeleteData
    }
}