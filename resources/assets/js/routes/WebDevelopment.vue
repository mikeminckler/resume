<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">
            <p>Since 2005 a professional web developer and content creator in the areas of  web design, video production, photography, graphic design, and 3D animation. An adaptive life-long learner always improving and staying current with the latest in progressive technology and digital media.</p>

            <grid-list :items="['Laravel', 'VueJS', 'PHP', 'HTML', 'CSS' ]"></grid-list>

        </div>

        <div class="header">Projects</div>

        <div class="content-item">
            <div class="sub-header">BlueHealth Inc</div>
            <div class="dates">September 2014 - Present</div>
            <p>Electronic Medical charting and management software.</p>
            <grid-list width="150px" :items="['Laravel + VueJS', '1100+ patients', 'Encrypted DB', '2FA', 'Form Building', 'Reporting', 'Invoicing', 'Inventory', 'Medication Dispensing']"></grid-list>
        </div>

        <div class="content-item">
            <div class="sub-header">Brentwood College School</div>
            <div class="dates">September 2014 - Present</div>
            <p>Electronic Medical charting and management software.</p>
            <grid-list width="150px" :items="['Laravel + VueJS', '1100+ patients', 'Encrypted DB', '2FA', 'Form Building', 'Reporting', 'Invoicing', 'Inventory', 'Medication Dispensing']"></grid-list>
        </div>

        <div class="header">Side Projects</div>
        <div class="content-item">
        
        </div>

    </div>

</template>

<script>

    export default {

        data: function() {
            return {
                contributions: ''
            }
        },

        mounted() {

            this.$http.get('https://github.com/users/mikeminckler/contributions').then( response => {
                this.contributions = response.data;
            }, error => {
            
            });

        }

    }

</script>
