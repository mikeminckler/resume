<script setup>
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import { useKeys } from '@/Composables/UseKeys.js';

useKeys([
    {
        key: 'Escape',
        fn: (e) => {
            selectedImage.value = null
        }
    },
]);

//const props = defineProps({
    //
//});

const selectedImage = ref();

const skills = ref([
    {
        title: 'Web Development',
        description: 'Since 2006, I have been developing websites for both data management projects and marketing. At Tecnet, I have been the lead developer for our web application that manages our client\'s assets, recommendation, issues, and tickets. At Brentwood, I was the lead developer for all marketing related web content including their latest marketing website. In addition I have developed and maintained a health management website, BlueHealth, since 2014. This website is a fully featured web app that manages charting, appointments, immunization, health forms, medications and prescriptions.',
        image: 'undraw_laravel_and_vue_-59-tp.svg',
        keywords: ['web'],
        skills: [
            { name: 'PHP', icon: 'fa-brands fa-php', },
            { name: 'Laravel', icon: 'fa-brands fa-laravel', },
            { name: 'VueJS', icon: 'fa-brands fa-vuejs' },
            { name: 'Javascript', icon: 'fa-brands fa-js' },
            { name: 'MySQL', icon: 'fa-solid fa-database' },
            { name: 'Tailwind CSS', icon: 'fa-brands fa-css3' },
            { name: 'Websockets', icon: 'fa-solid fa-arrow-right-arrow-left' },
        ],
        websites: [
            { name: 'Tecnet', link: 'https://www.tecnet.ca' },
            { name: 'Brentwood', link: 'https://www.brentwood.ca' },
            { name: 'Github', link: 'https://github.com/mikeminckler' },
        ],
    },
    {
        title: 'IT',
        description: 'I spent 8 years as an IT systems analyst from 2005 through 2013 at Brentwood. There I supported over 500 students and 100 staff with front line support, hardware repair, software troubleshooting, Meraki networking administration, and server administration.',
        image: 'undraw_maintenance_re_59vn.svg',
        keywords: ['it'],
        skills: [
            { name: 'Microsoft Entra' },
            { name: 'Azure' },
            { name: 'Meraki' },
            { name: 'Server Admin' },
            { name: 'Linux' },
            { name: 'Cloud Hosting' },
        ],
    },
    {
        title: 'Video Production',
        description: 'For the past 25 years I have been creating video content for projects including advertising, documentaries, interviews, social media, and visual effects. I have experience using cinema cameras, working in 4k, colour grading raw footage, custom titling, and green screen compositing.',
        image: 'undraw_developer_activity_re_39tg.svg',
        keywords: ['video'],
        skills: [
            { name: 'Final Cut Pro' },
            { name: 'Adobe Premier' },
            { name: 'After Effects' },
        ],
        links: [
            { name: 'Arts Promo', image: 'arts.jpg', link: 'https://www.youtube.com/watch?v=KeqaOtcf6mI' },
            { name: 'Athletics Promo', image: 'athletics.jpg', link: 'https://www.youtube.com/watch?v=zy4mEF7AcQw' },
            { name: '30 Second Ad', image: '30sec.jpg', link: 'https://www.youtube.com/watch?v=PXaL1AzpaBo' },
            { name: 'Short Documentary', image: '50_years_women.jpg', link: 'https://www.youtube.com/watch?v=mCgpx73bBBU' },
            { name: 'Sample Interview', image: 'luise.jpg', link: 'https://www.youtube.com/watch?v=3fpHv2LdwiQ' },
            { name: 'B-roll Rowing', image: 'rowing.jpg', link: 'https://www.youtube.com/watch?v=OFOKcspg588' },
            { name: 'B-roll Kayaking', image: 'kayaking.jpg', link: 'https://www.youtube.com/watch?v=JFdqjAH68Xk' },
            { name: 'Dance VFX', image: 'helplessly.jpg', link: 'https://www.youtube.com/watch?v=VoiOJa9wLYU' },
            //{ name: 'Dance', image: 'heather.jpg', link: 'https://www.youtube.com/watch?v=OOjuRe7iC1s' },
        ],
    },
    {
        title: 'Live Streaming',
        description: 'I established live streaming at Brentwood in 2013. These events included multi camera productions, NDI video transmission, Dante audio networking, audio mixing, scoreboard integration, and YouTube API',
        image: 'undraw_online_video_re_fou2.svg',
        keywords: ['livestream'],
        skills: [
            { name: 'vMix & OBS' },
            { name: 'YouTube API' },
            { name: 'NDI' },
            { name: 'Overlays' },
        ],
        links: [
            { name: 'Boys Basketball', image: 'basketball.jpg', link: 'https://www.youtube.com/watch?v=7mpYX_2v5bA' },
            { name: 'Winter Concert', image: 'cfwe.jpg', link: 'https://www.youtube.com/watch?v=3HJrqXFgYVE' },
            { name: 'Graduation Ceremony', image: 'grad.jpg', link: 'https://www.youtube.com/watch?v=lFf6_Lu7sf4' },
            { name: 'Brentwood Regatta', image: 'regatta.jpg', link: 'https://www.youtube.com/watch?v=DM5W2-dIeU0' },
        ],
    },
    {
        title: 'Photography',
        description: 'I have extensive experience taking professional photos for a wide range of events including sports, arts, theatre, portraits, and formal occasions.',
        image: 'undraw_landscape_photographer_blv1.svg',
        keywords: ['photography'],
        skills: [
            { name: 'SLR' },
            { name: 'Camera Raw' },
            { name: 'Travel' }, 
            { name: 'Sports' }, 
            { name: 'Theatre' },
            { name: 'Dance' }, 
            { name: 'Portraits' },
        ],
        links: [
            { name: 'Brentwood Advertising', image: 'dock_walk.jpg', link: '', expand: true },
            { name: 'Musical Mamma Mia', image: 'mamma_mia.jpg', link: '', expand: true },
            { name: 'Dance', image: 'dance_jump.jpg', link: '', expand: true },
            { name: 'Eagle', image: 'eagle.jpg', link: '', expand: true },
            { name: 'Music Concert', image: 'music.jpg', link: '', expand: true },
            { name: 'Rowing Sunrise', image: 'rowing_sunrise.jpg', link: '', expand: true },
            { name: 'Volleyball', image: 'DSC04045.jpg', link: '', expand: true },
            { name: 'Hope House', image: 'hope_house.jpg', link: '', expand: true },
        ],
    },
    {
        title: 'Marketing',
        description: 'For 10 years, I was the digital content creator at Brentwood creating website designs, photo and video ads, short films, and promotional photography. In addition I report on web analytics and data analysis, conversions funnels, and participate in strategic planning.',
        image: 'undraw_success_factors_re_ce93.svg',
        keywords: ['marketing'],
        skills: [
            { name: 'Website Design' },
            { name: 'Promo Content' },
            { name: 'Analytics' },
            { name: 'Digital Ads' },
        ],
    },
    {
        title: 'Graphic Design',
        description: 'I have provided graphic design for a variety of print and digital projects including athletic murals, theatre posters, dance promotion, and company branding.',
        image: 'undraw_build_wireframe_re_ln7g.svg',
        keywords: ['graphics'],
        skills: [
            { name: 'Photoshop' },
            { name: 'Illustrator' },
            { name: 'InDesign' },
        ],
        links: [
            { name: 'Athletics Artwork', image: 'vball_art.jpg', link: '', expand: true },
            { name: 'Dance Artwork', image: 'haze.jpg', link: '', expand: true },
            { name: 'Dance Reflection', image: 'reflection.jpg', link: '', expand: true },
        ],
    },
]);

const workExperience = ref([
    {
        title: 'Tecnet Canada Inc.',
        start_date: '2024',
        end_date: 'Present',
        items: [
            'Web developement and IT support for a variety of clients',
            'Created a web application that manages asset lifecycles and ticket requests',
            'Worked with LABC to develop a web application for managing user and groups in Microsoft Entra and Exchange Online',
            'Head of the Tools and Intergrations team',
        ],
        website: 'https://www.tecnet.ca',
    },
    {
        title: 'Brentwood College School',
        start_date: '2005',
        end_date: '2024',
        items: [
            '8 years in the IT department before transition to the marketing technical lead',
            '15 years as Webmaster launching 6 unique versions of the custom built website',
            'Lead photographer & videographer',
            'Live Stream Producer supervising 40 plus annual events',
            'Web server management and cloud hosting',
            '10 years as a Video production teacher',
        ],
        website: 'https://www.brentwood.ca',
    },
    {
        title: 'Bluewind Information Systems Inc.',
        start_date: '2014',
        end_date: 'Present',
        items: [
            'Developed an online health management system, BlueHealth',
            'Provided technical support for 15 nurses and staff',
            'BlueHealth third party support with API integrations and custom data mapping',
        ],
        website: 'https://bluewind.ca',
    },
]);

</script>

<template>
    <Head title="Mike Minckler - Resume" />
    <div class="m-2 sm:m-4 grid place-items-center">
        <div class="px-3 sm:px-6 pb-4 rounded-xl bg-zinc-100 shadow-xl w-full max-w-prose print:bg-transparent print:shadow-none print:max-w-2xl">
            <div class="sm:flex justify-between items-center py-2">
                <div class="text-3xl">Mike Minckler</div>
                <div class="text-sm flex justify-between sm:block">
                    <a href="mailto:mikeminckler@gmail.com" class="block text-right">
                        <FaIcon icon="fa-solid fa-envelope">mikeminckler@gmail.com</FaIcon>
                    </a>
                    <a href="tel:12507017414" class="block text-right">
                        <FaIcon icon="fa-solid fa-mobile-screen-button">(778) 966-4343</FaIcon>
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 text-sm bg-white -mx-3 sm:-mx-6 px-6 py-2 border-b border-t border-emerald-300 gap-1 print:bg-transparent">
                <FaIcon icon="fa-solid fa-globe" class="">Web Development</FaIcon>
                <FaIcon icon="fa-solid fa-database" class="">Data Management</FaIcon>
                <FaIcon icon="fa-solid fa-desktop" class="">IT</FaIcon>
                <FaIcon icon="fa-solid fa-video" class="">Video Production</FaIcon>
                <FaIcon icon="fa-solid fa-camera" class="">Photography</FaIcon>
                <FaIcon icon="fa-brands fa-youtube" class="">Live Streaming</FaIcon>
                <FaIcon icon="fa-solid fa-chart-line" class="">Marketing</FaIcon>
                <FaIcon icon="fa-solid fa-object-group" class="">Graphic Design</FaIcon>
            </div>

            <p>I have a passion for web development, data management, and technology. I enjoy constantly learning, improving, and embracing problem solving. My strong interpersonal and project management skills allow me to work well with clients and team members.</p>

            <h2>Skills</h2>
            <div class="rounded-lg px-3 sm:px-6 pt-3 pb-4 bg-zinc-50 shadow-lg my-4 -mx-2 relative print:bg-transparent print:shadow-none print:px-0 print:mx-0 print:py-0 break-inside-avoid-page" v-for="skill in skills">
                <div class="flex">
                    <div class="w-full">
                        <h3>{{ skill.title }}</h3>
                        <p>{{ skill.description }}</p>
                    </div>
                    <div class="max-w-12 sm:max-w-40 -mt-3 sm:-mt-5 sm:-mr-12 sm:-ml-2 absolute sm:block right-0 sm:relative print:mt-0">
                        <img :src="'/svg/' + skill.image" class="max-h-32 print:max-h-28"/>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 text-base mt-2 gap-x-2 gap-y-1 print:mt-0">
                    <div class="" v-for="skill in skill.skills">
                        <FaIcon :icon="skill.icon ? skill.icon : 'fa-regular fa-circle-check'"><span class="text-sm">{{ skill.name }}</span></FaIcon>
                    </div>
                </div>

                <div class="mt-4 mb-2 border-b print:hidden" v-if="skill.links?.length">Samples</div>
                <div class="grid grid-cols-4 gap-2 print:hidden">
                    <div :class="link.expand ? 'cursor-pointer' : ''" 
                            v-for="link in skill.links"
                            @click="link.expand ? selectedImage = link.image : null"
                        >
                        <a :href="link.link" v-if="link.image && link.link" target="_blank" class="relative block h-full">
                            <div class="rounded-b-md bg-black bg-opacity-50 px-1 py-0.5 text-white text-xs absolute bottom-0 w-full">{{ link.name }}</div>
                            <img :src="'/images/' + link.image" 
                                class="object-cover w-full h-full max-h-20 rounded-md"
                            />
                        </a>

                        <img v-if="link.image && !link.link" :src="'/images/' + link.image" 
                            class="object-cover w-full h-full max-h-20 rounded-md"
                        />
                        <a v-if="!link.image && link.link" :href="link.link" target="_blank" class="whitespace-nowrap">
                            <FaIcon icon="fa-solid fa-link" size="text-xs"></FaIcon>
                            <span class="text-sm ml-1">{{ link.link.substring(8) }} </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="hidden mb-4">
                <h2>Samples</h2>
                <p>Samples of my work can be found by going to my online resume at <a href="https://www.minckler.ca">www.minckler.ca</a></p>
            </div>

            <h2>Work Experience</h2>
            <div class="mt-2 mb-4" v-for="job in workExperience">
                <div class="sm:flex mb-2 sm:mb-0">
                    <h3 class="w-full"> {{ job.title }}</h3>
                    <a :href="job.website" class="sm:ml-4 inline-flex items-center" target="_blank">
                        <FaIcon icon="fa-solid fa-link" size="text-xs"></FaIcon>
                        <span class="text-sm ml-1">{{ job.website.substring(8) }} </span>
                    </a>
                </div>
                <div class="opacity-80 mt-1">
                    <span class="italic"> {{ job.start_date }} <FaIcon icon="fa-solid fa-minus" class="px-1"></FaIcon> {{ job.end_date }}</span>
                </div>
                <div class="grid grid-cols-[0fr_auto] mt-2">
                    <div class="grid grid-cols-subgrid col-span-full gap-1" v-for="item in job.items">
                        <div>
                            <FaIcon icon="fa-solid fa-caret-right" 
                                class="ml-2"
                            ></FaIcon>
                        </div>
                        <div class="">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <Transition name="fade">
        <div class="fixed w-screen h-screen top-0 z-10" v-if="selectedImage">

            <div class="absolute bg-white opacity-75 w-screen h-screen z-[5] print:bg-transparent" @click="selectedImage = null"></div>

            <div class="relative z-10 w-screen h-screen">
                <div class="w-full h-full" @click="selectedImage = null">
                    <img :src="'/images/' + selectedImage" class="absolute w-full h-full object-contain pointer-events-none p-8" />
                </div>
            </div>

        </div>
    </Transition>
</template>
