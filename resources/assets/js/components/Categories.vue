<template>

    <div class="categories">
        <div class="category clickable" 
            v-for="(category, index) in $store.state.categories" 
            :key="category.name"
            @click="updateCategories(category)"
        >
            <div v-show="category.visible">
                <div class="fas fa-check-circle"></div>
            </div>
            <div v-show="!category.visible">
                <div class="far fa-circle"></div>
            </div>
            <div class="category-name">{{ category.label }}</div>
        </div>
    </div>


</template>

<script>

    export default {

        methods: {

            updateCategories: function(category) {
                this.$store.dispatch('toggleCategory', category);
            },
        
        }

    }

</script>
