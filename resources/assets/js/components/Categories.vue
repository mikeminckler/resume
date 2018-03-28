<template>

    <div class="categories">

        <div class="category-menu">
            <div class="category clickable" 
                v-for="(category, index) in $store.state.categories" 
                :key="category.name"
                @click="updateCategories(category)"
                :class="category.visible ? 'category-active' : ''"
            >
                <div class="category-name">{{ category.label }}</div>
            </div>
        </div>

        <div class="header" v-if="activeCategory">
            <transition name="fade" mode="out-in">
                <div class="header-text" :key="activeCategory.name">{{ activeCategory.label }}</div>
            </transition>
        </div>
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
                this.$store.dispatch('toggleCategory', category);
                this.$router.push({ name: category.route});
            },
        
        }

    }

</script>
