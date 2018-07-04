const sites = [
    {
        id: 0,
        name: 'BlueHealth',
        thumbnail: 'bh.jpg',
        dates: 'October 2014 - Present',
        url: 'demo.bluehealth.ca',
        role: 'Medical charting and management application',
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
        description: 'Built on the Laravel PHP framework, BlueHealth features a clean and responsive user interface focused on providing quick and easy data entry, searching, and reporting. Security is provieded with an encrypted database, two factor authentication, group page and object permissions. VueJS is used extensively throughout the application for an interactive user experience. Websockets provide realtime feedback and event broadcasting.'
    },
    {
        id: 1,
        name: 'Brentwood College School',
        thumbnail: 'bcs.jpg',
        dates: 'June 2005 - August 2014',
        url: 'www.brentwood.bc.ca',
        role: 'CMS manager and design lead',
        gridList: [
            'PHP + JS', 
            'Typo3 CMS', 
            'CMS Custom Templates', 
            'Responsive Design', 
            'YouTube Integration'
        ],
        description: 'The main promotional Brentwood website to generate interest from new families and provide current families with a place to stay in touch with the school from afar. Using the Typo3 framework I produced a custom frontend design that was kept up to date with the latest technologies such as responsive design. The site was updated on an 18 month release cycle that produced five unique frontend designs and three content refreshes.',
    },
    {
        id: 2,
        name: 'Brentwood Information Event Registration',
        thumbnail: 'rsvp.jpg',
        dates: 'October 2017 - March 2018',
        url: 'rsvp.brentwood.ca',
        role: 'Registration system for admission info sessions',
        gridList: [
            'Laravel + VueJS', 
            'Realtime Form Validation',
            'CSS Grid + Flexbox',
            'Email Confirmation',
            'Advertising Analytics',
        ],
        description: 'Used as a landing page for online advertising, this site was targeted at prospective students and parents providing a registration component for new families to sign up for information sessions throughout the country. An interactive and easy to use registration form were design requirements that were accomplished using VueJS to give the user step by step feedback.',
    },
    {
        id: 3,
        name: 'Volleyball Statistics',
        thumbnail: 'vball.jpg',
        dates: 'September 2010 - Present',
        url: 'gamestats.brentwood.bc.ca',
        role: 'Stat keeping website for volleyball teams.',
        gridList: [
            'Laravel + VueJS', 
            'Single Page Application',
            'Real Time Stat Updates',
            'Websockets', 
            'Google Charts',
        ],
        description: 'This statistics tracking tool was used for the volleyball program at Brentwood. Using web sockets to provide realtime feedback without the need for page refreshes was a key design feature. This was accomplished using Laravel\'s broadcasting queue through NodeJS to trigger update events in the browser.',
    },
];

export default sites;
