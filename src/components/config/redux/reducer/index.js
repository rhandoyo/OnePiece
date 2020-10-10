
const globalState = {
    total : 5
}

const reducer = (state=globalState, action)=>{
    if(action.type === 'TAMBAH'){
        return{
            ...state,
            total: state.total + 1
        }
    }
    if(action.type === 'KURANG'){
        if(state.total > 0){
            return{
                ...state,
                total: state.total - 1
            }
        }
    }
    return state
}

export default reducer;