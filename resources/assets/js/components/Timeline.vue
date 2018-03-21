<template>

    <div class="timeline-container">

        <div class="timeline">

            <transition-group name="timeline-group"
                tag="div"
                class="timeline-left"
                appear
            >
                <div class="timeline-event"
                    v-for="(event, index) in leftEvents"
                    :key="event.date"
                    @click="activeEvent = event"
                >
                    <div class="timeline-event-item">
                        <div class="timeline-event-details-container">
                            <div class="timeline-event-details">
                                <div class="timeline-event-title">{{ event.title }}</div>
                                <timeline-date :event="event"></timeline-date>
                                <div class="timeline-event-description">{{ event.description }}</div>
                            </div>
                        </div>
                        <div class="timeline-connection">
                            <div class="timeline-connection-left"></div>
                        </div>
                    </div>

                </div>

            </transition-group>

            <transition-group name="timeline-group"
                tag="div"
                class="timeline-right"
                :class="!events.length ? 'timeline-right-hidden' : ''"
                appear
            >
                <div class="timeline-event"
                    v-for="(event, index) in rightEvents"
                    :key="event.date"
                    @click="activeEvent = event"
                >
                    <div class="timeline-event-item">
                        <div class="timeline-connection">
                            <div class="timeline-connection-right"></div>
                        </div>
                        <div class="timeline-event-details-container">
                            <div class="timeline-event-details">
                                <div class="timeline-event-title">{{ event.title }}</div>
                                <timeline-date :event="event"></timeline-date>
                                <div class="timeline-event-description">{{ event.description }}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </transition-group>

        </div>

        <div class="event-info" v-if="activeEvent">
            <div class="timeline-event-title">{{ activeEvent.title }}</div>
            <timeline-date :event="activeEvent"></timeline-date>
            <div class="timeline-event-description">{{ activeEvent.description }}</div>
        </div>

    </div>

</template>

<script>

    export default {

        data: function() {
            return {

                activeEvent: undefined,

                items: [
                    {
                        title: 'Visual Effects and 3D Animation Diploma',
                        date: '2000-06-01',
                        months: '16',
                        description: 'Art Institute of Vancouver',
                        category: 'basic',
                    },
                    {
                        title: 'Free Lance Media Work',
                        date: '2001-07-01',
                        months: '18',
                        description: 'Several small contract jobs for various clients',
                        category: 'basic',
                    },
                    {
                        title: 'Brentwood College School',
                        date: '2004-09-01',
                        months: 'present',
                        description: 'Hired as an IT systems analyst',
                        category: 'basic',
                    },
                    {
                        title: 'BlueHealth Inc',
                        date: '2014-10-01',
                        months: 'present',
                        description: 'Fouded BlueHealth Inc',
                        category: 'basic',
                    },

                    // programming
                    {
                        title: 'HTML',
                        date: '2001-05-01',
                        months: 'present',
                        description: 'Began building webpages',
                        category: 'coding',
                    },
                    {
                        title: 'Laravel',
                        date: '2014-10-15',
                        months: 'present',
                        description: 'Started working with Laravel PHP framework',
                        category: 'coding',
                    },
                    {
                        title: 'Vue JS',
                        date: '2016-01-15',
                        months: 'present',
                        description: 'Started working with Vue JS framework',
                        category: 'coding',
                    },

                ]
            }
        },

        computed: {

            displayCategories() {
                return this.$lodash.filter(this.$store.state.categories, ['visible', true]);
            },

            leftEvents() {
                return this.$lodash.filter(this.events, function(item, index) {
                    return index % 2 == 0;
                }); 
            },

            rightEvents() {
                return this.$lodash.filter(this.events, function(item, index) {
                    return index % 2 == 1;
                }); 
            },

            events() {
                let events = this.$lodash.filter(this.items, item => {
                    return this.$lodash.some(this.displayCategories, ['name', item.category]);
                });
                return this.$lodash.sortBy(events, ['date']).reverse()
            }

        },

        watch: {
            displayCategories() {
                this.activeEvent = undefined;
            }
        },

        methods: {

        }

    }

</script>
