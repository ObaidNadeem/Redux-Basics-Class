
const INITIAL_STATE = {
    condition : true,
    name: "shayan"
} 



function reducer( state = INITIAL_STATE , action ){
    switch (action.type) {
        case "CHANGE_NAME":
            console.log(state.condition)
            return {
                condition : !state.condition,
                name: state.condition ? "obaid" : "shayan"
            };
        default:
            return state;
    } 
} 

export default reducer;