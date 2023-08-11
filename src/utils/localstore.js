// store jwt token in local storage
const saveJWT =async  (state) => {
    try {
       console.log('save')
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch { 
      console.log('error')
    }
    };
// get jwt token from local storage
const loadJWT =  () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
    };
// remove jwt token from local storage
const removeJWT =  () => {
    try {
        localStorage.removeItem("state");
    } catch (error) {
        return undefined;
    }
    } 
export { saveJWT, loadJWT, removeJWT };