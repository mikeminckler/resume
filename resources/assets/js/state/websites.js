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
        description: 'The co-founder and lead programmer of a web-based online medical charting and management application. Built on the Laravel PHP framework, BlueHealth features a clean and responsive user interface focused on providing quick and easy data entry, searching, and reporting. BlueHealth has facilitated the creation of over 25,000 medical records annually.',
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
        description: 'A key member of the marketing and IT departments at Brentwood for over a decade. A leader in promoting Brentwood as a world renowned boarding school by developing and maintaining the school’s website, YouTube channel, and live stream productions. Produced video content and photography for online and promotional materials. Taught students in grades 9 through 12 the subjects of video production and 3D animation as well as coaching the girls’ volleyball team.',
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
        ],
        description: 'Used as a landing page for online advertising. Targeted at prospective students and parents, this site provided an registration component for new families to sign up for information sessions throughout the country. An interactive and easy to use registration form were design specifics.',
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
        description: 'This statistics tracking tool was used for the volleyball program at Brentwood. Using web sockets to provide realtime feedback without the need for page refreshes was a key design feature. This was accomplished using Laravel\'s broadcasting queue through NodeJS to provide update events in the browser.',
    },
];

export default sites;
