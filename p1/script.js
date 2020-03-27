
Vue.component('round-detail', {

    data: function () {
        return {

        }

    },

    template: '#round-detail',

    methods: {

    },

    props: {

        number: {
            type: Number,
            default: 0
        },

        winner: {
            String,
        }

    }

}


);

let app = new Vue({
    el: '#app',

    mounted:
        function () {

        },


    data: {
        weapons: ["rock", "paper", "scissors"],
        cweapon: '',
        winner: '',
        loser: '',
        userweapon: 'rock',
        userscore: 0,
        compscore: 0,
        rounds: [],
        number: 0,
        results: {},
        round: 0,
        showresults: false,
        resultsarein: false,
        victory: false,
    },



    computed: {


    },


    methods: {

        compweapon() {
            //generate the computer's weapon
            this.cweapon = '';
            this.cweapon = this.weapons[Math.floor(3 * Math.random())];
            this.resultsarein = true;
            //determine the winner
            if (this.userweapon === this.cweapon) {
                this.round++;
                this.victory = false;
                this.winner = 'tie';
                this.rounds.push({ number: this.round, winner: this.winner });
            }
            else if (this.userweapon == 'rock' && this.cweapon == 'scissors') {
                this.winner = 'user';
                this.victory = true;
                this.userscore++;
                this.round++;
                this.rounds.push({ number: this.round, winner: this.winner });
            }
            else if (this.userweapon == 'rock' && this.cweapon == 'paper') {
                this.winner = 'comp'
                this.victory = false;
                this.compscore++;
                this.round++;
                this.rounds.push({ number: this.round, winner: this.winner });
            }
            else if (this.userweapon == 'paper' && this.cweapon == 'rock') {
                this.winner = 'user'
                this.victory = true;
                this.userscore++;
                this.round++;
                this.rounds.push({ number: this.round, winner: this.winner });
            }
            else if (this.userweapon == 'paper' && this.cweapon == 'scissors') {
                this.winner = 'comp'
                this.victory = false;
                this.compscore++;
                this.round++;
                this.rounds.push({ number: this.round, winner: this.winner });
            }
            else if (this.userweapon == 'scissors' && this.cweapon == 'rock') {
                this.winner = 'comp'
                this.victory = false;
                this.compscore++;
                this.round++;
                this.rounds.push({ number: this.round, winner: this.winner });
            }
            else if (this.userweapon == 'scissors' && this.cweapon == 'paper') {
                this.winner = 'user'
                this.victory = true;
                this.userscore++;
                this.round++;
                this.rounds.push({ number: this.round, winner: this.winner });
            } 

      
        },

        victor() {
            
         },

        reset() {
            this.userscore = 0;
            this.compscore = 0;
            this.round = 0;
            this.rounds = [];
            this.resultsarein = false;
        },



    }




});