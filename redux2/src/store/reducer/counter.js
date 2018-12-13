export default (state=0,{type, payload})=>{
    switch (type) {
        case 'INCREMENT' : return ++state;
        case 'DECREMENT' : return --state;
        default: return state;
    }

}