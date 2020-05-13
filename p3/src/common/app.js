  
import Api from '@/common/api.js';

//export { default as Cart } from '@/common/Cart.js';


export const config = {
    firebase: {
        apiKey: 'AIzaSyC8BBInND9CEtKzIDD1nmEM8ykkuGB_y9k',
        projectId: 'e28p2sb'
    }
}

/* eslint-disable */
console.log(process.env.VUE_APP_FIREBASE_PROJECT_ID);
/* eslint-enable */

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});

// Simple state management pattern
// No longer using this now that we've switched to Vuex
// export let store = {
//     cartCount: 0
// }