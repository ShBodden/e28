<template>
    <div>
        <h2>Add An Establishment</h2>

        <label for='reviewer'>Your Name</label>
        <input type='text' v-model='establishment.reviewer' id='reviewer' />

        <label for='name'>Business Name</label>
        <input type='text' v-model='establishment.name' id='name' />

        <label for='address'>Address</label>
        <input type='text' v-model='establishment.address' id='address' />

        <label for='description'>Description</label>
        <textarea v-model='establishment.description' id='description'></textarea>

        <label for='category'>Category</label>
        <input type='text' v-model='establishment.category' id='category' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='establishment.slug' id='slug' />

        
        <label for='review'>Review</label>
        <textarea v-model='establishment.review' id='review'></textarea>



        <input type='submit' value='Add' @click.prevent='addestablishment' />
        <transition name='fade'>
                <div class='alert' v-if='added'>Your review has been submitted!</div>
        </transition>
    </div>
</template>

<script>

import * as app from '@/common/app.js';

export default {
    name: '',
    data: function() {
        return {
            added: false,
            establishment: {
                name: '',
                address: '',
                slug: '',
                price: '',
                available: '',
                weight: '',
                perishable: false,
                description: ''
            }
        };
    },

    methods: {
        addestablishment: function(){
            app.api.add('establishments', this.establishment).then(id => {
                console.log('new review submitted with id: ' + id);
                this.added = true;

                setTimeout(() => (this.added = false), 3000)

                this.establishment = {
                    name: '',
                    address: '',
                    slug: '',
                    price: '',
                    available: '',
                    weight: '',
                    perishable: false,
                    description: ''
            }
            });
        }
    }
};
</script>

<style scoped>
input {
    font-size: 15pt;
}

textarea,
input[type='text'] {
    width: 50%;
}

textarea {
    height: 75px;
    display: block;
    margin: auto;
}

label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}

input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>