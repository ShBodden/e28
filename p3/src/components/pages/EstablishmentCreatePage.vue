<template>
    <div>
        <h2>Add An Establishment</h2>


        <label for='reviewer'>Your Name</label>
        <input
            data-type='reviewer'
            type='text' 
            v-model='$v.establishment.reviewer.$model' 
            id='reviewer'
            :class='{ "form-input-error": $v.establishment.reviewer.$error }'/> 
                <div v-if='$v.establishment.reviewer.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.reviewer.required'
                    >Don't be shy, tell us your name.
                    </div>
                </div>


        <label for='name'>Business Name</label>
        <input 
            data-type='name'
            type='text' 
            v-model='$v.establishment.name.$model' 
            id='name' 
            :class='{ "form-input-error": $v.establishment.name.$error }'/>       
                <div v-if='$v.establishment.name.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.name.required'
                    >A business/establishment name is required.
                    </div>
                </div>


        <label for='address'>Address</label>
        <input 
            data-type='address'
            type='text'
            v-model='$v.establishment.address.$model'
            id='address' 
            :class='{ "form-input-error": $v.establishment.address.$error }'/>             
                <div v-if='$v.establishment.address.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.address.required'
                    >Where can we find this place
                    </div>
                </div>


        <label for='description'>Description</label>
        <textarea 
            placeholder="Tell us about this place"
            data-type='description' 
            v-model='$v.establishment.description.$model' 
            id='description'
            :class='{ "form-input-error": $v.establishment.description.$error }'>
        </textarea>
                <div v-if='$v.establishment.description.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.description.required'
                    >Please provide a brief description of this business.
                    </div>
                </div>        

        <label for='category'>Category</label>
        <input 
        data-type='category' 
        type='text' 
        v-model='$v.establishment.category.$model'
        id='category' 
        :class='{ "form-input-error": $v.establishment.category.$error }'>
                <div v-if='$v.establishment.category.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.category.required'
                    >What kind of business is this?
                    </div>
                </div>

        <label for='slug'>URL Identifier:</label>
        <input 
        data-type='slug' 
        type='text' 
        v-model='$v.establishment.slug.$model' 
        id='slug'
        :class='{ "form-input-error": $v.establishment.slug.$error }'>
                <div v-if='$v.establishment.slug.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.slug.required'
                    >required
                    </div>
                </div>

        
        <label for='review'>Review</label>
        <textarea 
            data-type='review' 
            v-model='$v.establishment.review.$model' 
            id='review'
            :class='{ "form-input-error": $v.establishment.review.$error }'>
        </textarea>
                <div v-if='$v.establishment.review.$error'>
                    <div 
                    class='form-feedback-error' 
                    v-if='!$v.establishment.review.required'
                    >...so, how was it?
                    </div>
                </div>   

<div class="form-feedback-error" v-if='$v.$anyError'>Looks like you forgot something. Fix it please.</div>

        <input data-type='add-review' type='submit' value='Add' @click.prevent='addestablishment' />


        <transition name='fade'>
                <div data-test='added-confirmation' class='alert' v-if='added'>Your review has been submitted!</div>
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
                reviewer: '',
                name: '',
                address: '',
                description: '',
                category: '',
                slug: '',
                review: ''
            }
        };
    },

    validations: {
        establishment: {
            reviewer: {
                required
    },
            name: {
                required
    },
            address: {
                required
    },
            description: {
                required
    },
            category: {
                required
    },
            slug: {
                required
    },
            review: {
                required
    },
}
    },

    methods: {
        addestablishment: function(){
            this.$v.$touch();

            if (this.$v.$anyError == false) {
                app.api.add('establishments', this.establishment).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
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