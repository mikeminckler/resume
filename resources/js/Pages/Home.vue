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
        description: 'Since 2006, I have been developing websites for both marketing and data management projects. At Brentwood College School I have been the lead developer for all marketing related web content and our latest website with responsive design, version control, photo management, blog, staff bios, course descriptions, CSP, intergration with Google groups and Google Calendar. In addition I have developed and maintained a health management website, BlueHealth, since 2014. This website is a fully featured web app that manages charting, appointments, immunization, health form, medications and prescriptions.',
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
            { name: 'Brentwood', link: 'https://www.brentwood.ca' },
            { name: 'Github', link: 'https://github.com/mikeminckler' },
        ],
    },
    {
        title: 'Video Production',
        description: 'I have been creating videos for over 25 years for projects inclusing advertising, documenteries, interviews, social media, and visual effects. I have experiecne using cinema cameras, working in 4k, colour grading raw footage, custom titling, and green screen composting.',
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
            //{ name: 'Dance', image: 'heather.jpg', link: 'https://www.youtube.com/watch?v=OOjuRe7iC1s' },
        ],
    },
    {
        title: 'Live Streaming',
        description: 'Established live streaming at Brentwood in 2013. Multi camera productions, NDI video transmission, Dante audio networking, audio mixing, scoreboard integration, YouTube API',
        image: 'undraw_online_video_re_fou2.svg',
        keywords: ['livestream'],
        skills: [
            { name: 'vMix' },
            { name: 'OBS' },
            { name: 'YouTube' },
            { name: 'NDI' },
            { name: 'Websocket Overlays' },
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
        description: 'Extensive experience taking professional photos including sports, arts, theatre, portraits, and formal events.',
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
        ],
    },
    {
        title: 'IT',
        description: '8 years as an IT systems analyst from 2005 through 2013 at Brentwood. Supported 500 students and 100 staff with front line support, hardware repair, software troubleshooting, Meraki networking administration, Linux and Windows server administration.',
        image: 'undraw_maintenance_re_59vn.svg',
        keywords: ['it'],
        skills: [
            { name: 'Client Support' },
            { name: 'Meraki' },
            { name: 'Server Admin' },
            { name: 'Linux' },
            { name: 'Cloud Hosting' },
        ],
    },
    {
        title: 'Marketing',
        description: 'Starting in 2013, I have been the digital content creator at Brentwood. Custom built content management, promotional ads, short films, photography. Web analytics and data anylysis, conversions funnels, strategic planning.',
        image: 'undraw_success_factors_re_ce93.svg',
        keywords: ['marketing'],
        skills: [
            { name: 'Website Design' },
            { name: 'Promotional Content' },
            { name: 'Analytics' },
            { name: 'Digital Ads' },
        ],
    },
    {
        title: 'Graphic Design',
        description: 'Design work at Brentwood for a variety of print and digital projects. Athletic murals, theatre posters, dance promotion, branding',
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
        title: 'Brentwood College School',
        start_date: '2005',
        items: [
            '9 years in IT department before transition to Marketing technical lead',
            '15 years as Webmaster launching 6 unqiue versions of the custom built website',
            'Lead photographer & videographer',
            'Live Stream Producer supervising 40 plus annual events',
            'Web server managment and cloud hosting',
            '10 years as a Video production teacher',
        ],
        website: 'https://www.brentwood.ca',
    },
    {
        title: 'Bluewind Information Systems Inc.',
        start_date: '2014',
        items: [
            'Developed an online health management system, BlueHealth',
            'Provided techincal support for 15 nurses and staff',
            'Third party support with API intergrations and custom data mapping',
        ],
        website: 'https://bluewind.ca',
    },
]);

</script>

<template>
    <Head title="Mike Minckler - Resume" />
    <div class="m-4 grid place-items-center">
        <div class="px-6 pb-4 rounded-xl bg-zinc-100 shadow-xl w-full max-w-prose">
            <div class="flex justify-between items-center py-2">
                <div class="text-3xl">Mike Minckler</div>
                <div class="text-sm">
                    <a href="mailto:mikeminckler@gmail.com" class="block text-right">
                        <FaIcon icon="fa-solid fa-envelope">mikeminckler@gmail.com</FaIcon>
                    </a>
                    <a href="tel:12507017414" class="block text-right">
                        <FaIcon icon="fa-solid fa-mobile-screen-button">(250) 701-7414</FaIcon>
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-4 text-sm bg-white -mx-6 px-6 py-2 border-b border-t border-emerald-300 gap-1">
                <FaIcon icon="fa-solid fa-video" class="">Video Production</FaIcon>
                <FaIcon icon="fa-solid fa-camera" class="">Photography</FaIcon>
                <FaIcon icon="fa-solid fa-desktop" class="">IT</FaIcon>
                <FaIcon icon="fa-solid fa-globe" class="">Web Development</FaIcon>
                <FaIcon icon="fa-brands fa-youtube" class="">Live Streaming</FaIcon>
                <FaIcon icon="fa-solid fa-chart-line" class="">Marketing</FaIcon>
                <FaIcon icon="fa-solid fa-object-group" class="">Graphic Design</FaIcon>
            </div>

            <p>I have a passion for content creation and technology. I enjoy constantly learning, improving, and embracing problem solving. My strong inerpersonal and project management skills allow me to work well with clients and team members.</p>

            <h2>Skills</h2>
            <div class="rounded-lg px-6 pt-3 pb-4 bg-zinc-50 shadow-lg my-4 -mx-2" v-for="skill in skills">
                <div class="flex">
                    <div class="w-full">
                        <h3>{{ skill.title }}</h3>
                        <p>{{ skill.description }}</p>


                    </div>
                    <div class="max-w-40 -mt-5 -mr-8 -ml-2">
                        <img :src="'/svg/' + skill.image" class="max-h-32"/>
                    </div>
                </div>

                <div class="grid grid-cols-3 text-bae mt-2 gap-x-2 gap-y-1">
                    <div class="" v-for="skill in skill.skills">
                        <FaIcon :icon="skill.icon ? skill.icon : 'fa-regular fa-circle-check'"><span class="text-sm">{{ skill.name }}</span></FaIcon>
                    </div>
                </div>

                <div class="grid grid-cols-4 mt-4">
                    <div :class="link.expand ? 'cursor-pointer' : ''" v-for="link in skill.links"
                            @click="link.expand ? selectedImage = link.image : null"
                        >
                        <img :src="'/images/' + link.image" 
                            class="object-cover w-full max-h-20 rounded-lg border-white border-2 ring-1 ring-gray-300"
                            v-if="link.image"
                        />
                        <a v-if="!link.image && link.link" :href="link.link" target="_blank" class="whitespace-nowrap">
                            <FaIcon icon="fa-solid fa-link" size="text-xs"></FaIcon>
                            <span class="text-sm ml-1">{{ link.link.substring(8) }} </span>
                        </a>
                    </div>
                </div>

            </div>

            <h2>Work Experince</h2>
            <div class="mt-2 mb-4" v-for="job in workExperience">
                <h3>
                    {{ job.title }}
                    <a :href="job.website" class="ml-4 inline-flex items-center" target="_blank">
                        <FaIcon icon="fa-solid fa-link" size="text-xs"></FaIcon>
                        <span class="text-sm ml-1">{{ job.website.substring(8) }} </span>
                    </a>
                </h3>
                <div class="opacity-80">
                    <span class="italic"> {{ job.start_date }} <FaIcon icon="fa-solid fa-minus" class="px-1"></FaIcon> Present</span>
                </div>
                <div class="mt-2">
                    <div class="" v-for="item in job.items">
                        <FaIcon icon="fa-solid fa-caret-right" 
                            class="ml-2"
                            spacing="ml-2"
                        >{{ item }}</FaIcon>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <Transition name="fade">
        <div class="fixed w-screen h-screen top-0 z-10" v-if="selectedImage">

            <div class="absolute bg-white opacity-75 w-screen h-screen z-[5]" @click="selectedImage = null"></div>

            <div class="relative z-10 w-screen h-screen">
                <div class="w-full h-full" @click="selectedImage = null">
                    <img :src="'/images/' + selectedImage" class="absolute w-full h-full object-contain pointer-events-none p-8" />
                </div>
            </div>

        </div>
    </Transition>
</template>
