<template>

    <div class="categories">

        <transition-group name="categories" class="category-menu" tag="div">

            <div class="category clickable" 
                v-for="(category, index) in $store.state.categories" 
                :key="category.name"
                @click="updateCategories(category)"
                :class="category.visible ? 'category-active' : ''"
            >
                <div class="category-name">{{ category.label }}</div>
            </div>

        </transition-group>

    </div>


</template>

<script>

    export default {

        computed: {

            activeCategory() {
                return this.$lodash.filter(this.$store.state.categories, function(category) {
                    return category.visible;
                })[0];
            }

        },

        methods: {

            updateCategories: function(category) {
                this.$store.dispatch('setCategory', category);
            },
        
        }

    }

</script>
