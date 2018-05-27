<template>

    <div class="grid-list" :style="width ? 'grid-template-columns: repeat(auto-fit, minmax(' + width + ', 1fr))' : ''">
        <div class="grid-item" v-for="item in items">
            <div class="grid-item-bullet fas fa-check-circle"></div>
            <div class="grid-item-text">{{ item }}</div>
        </div>
    </div>


</template>

<script>

    export default {

        props: ['items', 'width'],

    }

</script>
