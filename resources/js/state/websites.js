const sites = [
    {
        id: 0,
        name: 'Resort Management',
        thumbnail: 'tcr.jpg',
        dates: 'December 2018 - Present',
        url: 'demo.telegraphcoveresort.ca/demo?signature=ff7fdb7e76f6e83efaf3051447fa3c61f86eaefcb9074dfb6943354cb34d4650',
        role: 'Management software for accommodation, marina, campground, and tours.',
        gridList: [
            'Laravel + VueJS + InertiaJs', 
            'Stripe Integration', 
            'SPA + Websockets',
            'Calendaring', 
            'Accounting', 
            'Invoicing', 
        ],
        description: 'Currently in development this all in one resort management software is built Laravel, VueJs, InertiaJS and TailwindCSS. This single page application integrates with Stripe to provide a seamless payment gateway for the customers on management staff. InertiaJS provides a single page application front end while maintaining all the server side object permissions and page middleware. Websockets are a key feature used to keep a constant stream of information passed to the client.'
    },
    {
        id: 1,
        name: 'BlueHealth',
        thumbnail: 'bh.jpg',
        dates: 'October 2014 - Present',
        url: 'demo.bluehealth.ca',
        role: 'Medical charting and management application.',
        gridList: [
            'Laravel + VueJS', 
            '1100+ patients', 
            'Encrypted DB', 
            '2FA', 
            'Form Building', 
            'Reporting', 
            'Invoicing', 
            'Inventory', 
            'Medication Dispensing'
        ],
        description: 'Built on the Laravel PHP framework, BlueHealth features a clean and responsive user interface focused on providing quick and easy data entry, searching, and reporting. Security is provided with an encrypted database, two factor authentication, group page and object permissions. VueJS is used extensively throughout the application for an interactive user experience. Websockets provide real time feedback and event broadcasting.'
    },

    {
        id: 2,
        name: 'Brentwood Landing Page',
        thumbnail: 'rsvp.jpg',
        dates: 'January 2020',
        url: 'rsvp.brentwood.ca',
        role: 'Featured landing page for online advertising through social media platforms.',
        gridList: [
            'Laravel + VueJS', 
            'Realtime Form Validation',
            'CSS Grid + Flexbox',
            'Email Confirmation',
            'Advertising Analytics',
        ],
        description: 'Used as a landing page for online advertising, this site is targeted at prospective students and parents, providing a registration component for new families to sign up for information sessions across the country. An interactive and easy to use registration form were design requirements that were accomplished using VueJS.',
    },

    {
        id: 3,
        name: 'Brentwood College School',
        thumbnail: 'bcs.jpg',
        dates: 'June 2005 - August 2014',
        url: 'www.brentwood.bc.ca',
        role: 'Main promotional website built using Typo3 CMS.',
        gridList: [
            'PHP + JS', 
            'Typo3 CMS', 
            'CMS Custom Templates', 
            'Responsive Design', 
            'YouTube Integration'
        ],
        description: 'This is Brentwood\'s main promotional website focused on generating interest from new families and keeping current families in touch with the school. Using the Typo3 framework I produced a custom frontend design that was kept up to date with the latest technologies such as responsive design and deferred image loading. The site was updated on an 18 month release cycle that produced five unique frontend designs and three content refreshes.',
    },
    /*
    {
        id: 3,
        name: 'Brentwood Information Event Registration',
        thumbnail: 'rsvp.jpg',
        dates: 'October 2017 - March 2018',
        url: 'rsvp.brentwood.ca',
        role: 'Registration system for admissions information sessions.',
        gridList: [
            'Laravel + VueJS', 
            'Realtime Form Validation',
            'CSS Grid + Flexbox',
            'Email Confirmation',
            'Advertising Analytics',
        ],
        description: 'Used as a landing page for online advertising, this site is targeted at prospective students and parents, providing a registration component for new families to sign up for information sessions across the country. An interactive and easy to use registration form were design requirements that were accomplished using VueJS to give the user step-by-step feedback.',
    },

    {
        id: 4,
        name: 'Volleyball Statistics',
        thumbnail: 'vball.jpg',
        dates: 'September 2010 - Present',
        url: 'gamestats.brentwood.bc.ca',
        role: 'Statistics tracking website for volleyball teams.',
        gridList: [
            'Laravel + VueJS', 
            'Single Page Application',
            'Real Time Stat Updates',
            'Websockets', 
            'Google Charts',
        ],
        description: 'This statistics tracking tool is used for the volleyball program at Brentwood. Using websockets to provide real time feedback without the need for page refreshes is a key design feature. I accomplished this using Laravel\'s broadcasting queue, through NodeJS, to trigger update events in the browser.',
    },
    */
];

export default sites;
