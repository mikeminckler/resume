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

        <transition name="event-info" mode="out-in">
            <div class="event-info" v-if="activeEvent">
                <transition name="event-info-item" mode="out-in" appear>
                    <div :key="activeEvent.date">
                        <div class="timeline-event-title">{{ activeEvent.title }}</div>
                        <timeline-date :event="activeEvent"></timeline-date>
                        <div class="timeline-event-description">{{ activeEvent.description }}</div>
                    </div>
                </transition>
            </div>
        </transition>

    </div>

</template>

<script>

    export default {

        data: function() {
            return {
                activeEvent: undefined,
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
                let events = this.$lodash.filter(this.$store.state.items, item => {
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
