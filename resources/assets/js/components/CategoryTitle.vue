<template>

    <div class="category-title">

        <div class="header">{{ category.label }}</div>
        <div class="header-icon">
            <i :class="category.icon"></i>
        </div>

    </div>


</template>

<script>

    export default {

        computed: {

            category() {
                return this.$store.state.activeCategory;
            }

        },

        methods: {

        }

    }

</script>
