<template>

    <div class="timeline-event-date">
        <div class="timeline-event-month">{{ startMonth }}</div>
        <div class="timeline-event-year">{{ startYear }}</div>
        <div class="timeline-event-date-dash" v-if="endMonth">-</div>
        <div class="timeline-event-month" v-if="endMonth">{{ endMonth }}</div>
        <div class="timeline-event-year" v-if="endYear">{{ endYear }}</div>
    </div>

</template>

<script>

    import moment from 'moment';

    export default {

        props: ['event'],

        data: function() {
            return {
            }
        },

        computed: {
            startMonth() {
                if (this.event.date) {
                    return moment(this.event.date).format('MMMM');
                }
            },
            startYear() {
                if (this.event.date) {
                    return moment(this.event.date).format('YYYY');
                }
            },
            endMonth() {
                if (this.event.date) {
                    if (this.event.months) {
                        if (this.event.months == 'present') {
                            return 'Present';
                        } else {
                            return moment(this.event.date).add(this.event.months, 'months').format('MMMM');
                        }
                    }     
                }
            },
            endYear() {
                if (this.event.date) {
                    if (this.event.months) {
                        if (this.event.months != 'present') {
                            return moment(this.event.date).add(this.event.months, 'months').format('YYYY');
                        }
                    }     
                }
            }
        
        },

    }

</script>
