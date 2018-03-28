<template>

    <div class="route">

        <div class="content-item">

            <div class="content-header">Experience</div>
            <p>Since 2005 a professional web developer and content creator in the areas of  web design, video production, photography, graphic design, and 3D animation. An adaptive life-long learner always improving and staying current with the latest in progressive technology and digital media.</p>

            <div class="grid-list">
                <div class="grid-item" v-for="item in listItems">
                    <div class="grid-item-bullet far fa-circle"></div>
                    <div class="grid-item-text">{{ item }}</div>
                </div>
            </div>

        </div>

        <div class="content-item">
            <div class="content-header">Projects</div>
        </div>
        <timeline></timeline>

    </div>

</template>

<script>

    export default {

        data: function() {
            return {
                listItems: [
                    'Laravel',
                    'VueJS',
                    'PHP',
                    'HTML',
                    'CSS'
                ]
            }
        },

    }

</script>
