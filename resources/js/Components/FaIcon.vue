<script setup>
import { ref, useSlots } from 'vue';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const slots = useSlots();

import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';

const props = defineProps({
    icon: { type: String, required: true },
    spacing: { type: String, default: 'pl-2' },
    size: { type: String, default: 'text-sm' },
});

import {
    faCode,
    faPhotoFilm,
    faMinus,
    faDesktop,
    faGlobe,
    faVideo,
    faCamera,
    faCaretRight,
    faLink,
    faEnvelope,
    faMobileScreenButton,
    faDatabase,
    faChartLine,
    faObjectGroup,
    faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

import {
    faCircleCheck as farCircleCheck,
    faFileVideo as farFileVideo,
} from '@fortawesome/free-regular-svg-icons'

import {
    faYoutube,
    faPhp,
    faLaravel,
    faVuejs,
    faJs,
    faCss3,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;

library.add(
    faCode,
    faPhotoFilm,
    faMinus,
    faDesktop,
    faGlobe,
    faVideo,
    faCamera,
    faCaretRight,
    faYoutube,
    faLink,
    faEnvelope,
    faMobileScreenButton,
    faPhp,
    faLaravel,
    faVuejs,
    faJs,
    faDatabase,
    faCss3,
    faChartLine,
    faObjectGroup,
    faArrowRightArrowLeft,
    faDatabase,

    farCircleCheck,
    farFileVideo,
);
</script>

<template>
    <div class="inline">
        <div class="opacity-75 leading-relaxed text-emerald-500 inline" :class="size">
            <font-awesome-icon :icon="icon"></font-awesome-icon>
        </div>
        <div :class="spacing" class="inline" v-if="slots.default">
            <slot />
        </div>
    </div>
</template>

