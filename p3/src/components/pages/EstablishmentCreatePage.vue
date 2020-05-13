<template>
    <div>
        <h2>Add An Establishment</h2>

        <label for='reviewer'>Your Name</label>
        <input type='text' v-model='establishment.reviewer' id='reviewer' />

        <label for='name'>Business Name</label>
        <input 
        type='text' 
        v-model='$v.establishment.name.$model' 
        id='name' 
        :class='{ "form-input-error": $v.establishment.name.$error }'/>
       
        <div v-if='$v.establishment.name.$error'>
                <div 
                class='form-feedback-error' 
                v-if='!$v.establishment.name.required'
                >A business/establishment name is required.</div>
            </div>

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

<div class="form-feedback-error" v-if='$v.$anyError'>Fix it Please</div>

        <input type='submit' value='Add' @click.prevent='addestablishment' />


        <transition name='fade'>
                <div class='alert' v-if='added'>Your review has been submitted!</div>
        </transition>
    </div>
</template>

<script>

import * as app from '@/common/app.js';
import {required} from 'vuelidate/lib/validators';

export default {
    name: '',
    data: function() {
        return {
            added: false,
            establishment: {
                name: '',
                address: '',
                slug: '',
                description: ''
            }
        };
    },

    validations: {
        establishment: {
            name: {
                required
    },
}
    },

    methods: {
        addestablishment: function(){
            this.$v.$touch();

   // Only add the product if we don't have any errors
            if (this.$v.$anyError == false) {
                app.api.add('establishments', this.establishment).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
                        // Because we're not redirecting the user after adding a product, we should reset the validation so they can add a new product
                        this.$v.$reset();
                this.added = true;

                setTimeout(() => (this.added = false), 3000)

                this.establishment = {
                    name: '',
                    address: '',
                    slug: '',
                    description: ''
            };
                    }
            });
        }
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