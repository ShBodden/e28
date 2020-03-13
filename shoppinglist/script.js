// The Vue instance
let app = new Vue({

    el: '#app',
    data: {
        list: [],
        shoppingList: false,
        item: null,
        make: '',
        model: '',
        type: '',
        cars: [
            { make: 'honda', model: 'civic', type: 'sedan'},
            { make: 'ford', model: 'escort', type:'sedan' },
            {make: 'toyota', model: 'siena', type: 'van'}
        ],

        // Options
        //todo: 
        //  create objet with qty and name. need to create another html model for qty and send each "new" item to list array
        // newtiem = new items (); this.items.push(this.item), this.items.push(this.qty)
        // allow for click enter
        // clear box after input ccccc  
    },

    methods: {
        additem: function (event) {
            this.list.push(this.item);

        },




    }


})

