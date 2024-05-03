<script setup>
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    
});

const selectedImage = ref();

const skills = ref([
    {
        title: 'Web Development',
        description: 'Since 2006, I have been developing websites for both marketing and data management projects. At Brentwood College School I have been the lead developer for all marketing related web content. Since 2014 I have also developed and maintained a health management website.',
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
            { name: 'Sample Interview Footage', image: 'luise.jpg', link: 'www.youtube.com/watch?v=3fpHv2LdwiQ' },
        ],
    },
    {
        title: 'Live Streaming',
        description: 'Established live streaming at Brentwood in 2013. Multi camera productions, NDI transmission across multiple ',
        image: 'undraw_online_video_re_fou2.svg',
        keywords: ['livestream'],
        skills: [
            { name: 'vMix' },
            { name: 'OBS' },
            { name: 'YouTube' },
            { name: 'NDI' },
            { name: 'Custom Overlays' },
        ],
    },
    {
        title: 'Photography',
        description: 'Extensive experience taking professional photos at a variety of sporting and artistic events.',
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
            { name: 'Rowing Sunrise', image: 'rowing_sunrise.jpg', link: '', expand: true },
        ],
    },
    {
        title: 'IT',
        description: '8 years as an IT systems analyst at Brentwood supporting 500 students and 100 staff. Provided front line support, hardware repair and software troubleshooting including Meraki networking administration.',
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
        description: '',
        image: 'undraw_success_factors_re_ce93.svg',
        keywords: ['marketing'],
        skills: [
            { name: 'Analytics' },
            { name: 'Social Media' },
            { name: 'Digital Ads' },
        ],
    },
    {
        title: 'Graphic Design',
        description: '',
        image: 'undraw_build_wireframe_re_ln7g.svg',
        keywords: ['graphics'],
        skills: [
            { name: 'Photoshop' },
            { name: 'Illustrator' },
        ],
    },
]);

const workExperience = ref([
    {
        title: 'Brentwood College School',
        start_date: '2005',
        items: [
            '9 years in IT department before transition to Marketing technical lead',
            '15 years as Webmaster launching 6 unqiue versions of content rich marketing website',
            'Web server Managment, cloud hosting, linux',
            'Currently lead photographer &amp; videographer',
            'Video production teacher for 10 years',
            'Established live streaming in 2013, culminating in over 40 annual events accumilating 34,000 views',
        ],
        website: 'www.brentwood.ca',
    },
    {
        title: 'Bluewind Information Systems Inc.',
        start_date: '2014',
        items: [
            'Developed an online health management system, BlueHealth',
            'Provided techincal support for 15 nurses and staff',
        ],
        website: 'bluewind.ca',
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

            <p>I have a passion for content creation and technology. In a constant state of learning and improving, I embrace problem solving. Excellent inerpersonal and team management skills.</p>

            <h2>Skills</h2>
            <div class="rounded-lg px-6 pt-3 pb-4 bg-zinc-50 shadow-lg my-4 -mx-2" v-for="skill in skills">
                <div class="flex">
                    <div class="w-full">
                        <h3>{{ skill.title }}</h3>
                        <p>{{ skill.description }}</p>

                        <div class="grid grid-cols-3 text-bae mt-2 gap-x-2 gap-y-1">
                            <div class="" v-for="skill in skill.skills">
                                <FaIcon :icon="skill.icon ? skill.icon : 'fa-regular fa-circle-check'"><span class="text-sm">{{ skill.name }}</span></FaIcon>
                            </div>
                        </div>

                        <div class="grid grid-cols-4 mt-4">
                            <div class="cursor-pointer" v-for="link in skill.links"
                                    @click="selectedImage = link.image"
                                >
                                <img :src="'/images/' + link.image" 
                                    class="object-cover h-24 w-24 rounded-lg border-white border-2 ring-1 ring-gray-300"
                                    v-if="link.image"
                                />
                            </div>
                        </div>

                    </div>
                    <div class="max-w-40 -mt-5 -mr-8 -ml-2">
                        <img :src="'/svg/' + skill.image" />
                    </div>
                </div>
            </div>

            <h2>Work Experince</h2>
            <div class="mt-2 mb-4" v-for="job in workExperience">
                <h3>
                    {{ job.title }}
                    <a :href="'https://' + job.website" class="ml-4 inline-flex items-center" target="_blank">
                        <FaIcon icon="fa-solid fa-link" size="text-xs"></FaIcon>
                        <span class="text-sm ml-1">{{ job.website }} </span>
                    </a>
                </h3>
                <div class="opacity-80">
                    <span class="italic"> {{ job.start_date }} <FaIcon icon="fa-solid fa-minus" class="px-1"></FaIcon> Present</span>
                </div>
                <div class="mt-2">
                    <FaIcon icon="fa-solid fa-caret-right" 
                        v-for="item in job.items"
                        class="ml-2"
                        spacing="ml-2"
                    >{{ item }}</FaIcon>
                </div>
            </div>

        </div>
    </div>

    <div class="fixed w-screen h-screen top-0 z-10" v-if="selectedImage">

        <div class="absolute bg-white opacity-75 w-screen h-screen z-[5]" @click="selectedImage = null"></div>

        <div class="relative z-10 w-screen h-screen">
            <div class="w-full h-full" @click="selectedImage = null">
                <img :src="'/images/' + selectedImage" class="absolute w-full h-full object-contain pointer-events-none p-8" />
            </div>
        </div>

    </div>
</template>
