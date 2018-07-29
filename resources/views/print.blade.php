<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="google" content="notranslate">
        <meta http-equiv="Content-Language" content="en">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Mike Minckler - Resume</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

    </head>
    <body class="print">

        <div class="app" id="app">
            <div class="content">

                <div class="top" id="top">
                    <div class="name-title">
                        <div class="title">Mike Minckler</div>
                        <div class="sub-title">Web Developer + Content Creator</div>
                        <div class="email-phone">
                            <div class="email"><a @click.stop="" href="mailto:mikeminckler@gmail.com">mikeminckler@gmail.com</a></div>
                            <div class="phone"><a @click.stop="" href="tel:+12507017414">+12507017414</a></div>
                        </div>
                    </div>
                </div>

                <div class="middle">

                    <div class="content-area color1">

                        <div class="category-title">

                            <div class="header show">Full Stack Web Developer + Content Creator</div>

                            <div class="header-icon">
                                <img src="/images/categories/undraw_onboarding_o8mv.svg" class="category-image" />
                            </div>

                        </div>

                        <div class="router-area route">

                            <div class="content-item">

                                <p>For the past 13 years, I have worked as a web developer and content creator. I currently work with Laravel and VueJS creating elegant and intuitive websites. My content creation talents include extensive experience with video production, photography and graphic design.</p>

                                <div class="portfolio-link">
                                    <a href="https://minckler.ca" target="_blank" class="portfolio-link">
                                        <div class="portfolio-text">View my online portfolio at https://minckler.ca</div>
                                        <div><i class="fas fa-angle-right"></i></div>
                                    </a>
                                </div>

                            </div>

                            <div class="header">Core Skills</div>
                            <div class="content-item">

                                <div class="core-skills">
                                    <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                                    <div class="bg-row"><span @click="setCategory('web-development')" class="route-link">Web Development</span></div>
                                    <div class="skills bg-row">
                                        Laravel,
                                        VueJS,
                                        PHP,
                                        JS,
                                        MySQL,
                                        CSS Flex + Grid + Transitions
                                    </div>

                                    <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                                    <div><span @click="setCategory('photography')" class="route-link">Photography</span></div>
                                    <div class="skills">
                                        Canon SLR,
                                        Events,
                                        Travel,
                                        Sports,
                                        Theatre,
                                        Dance,
                                        Portraits
                                    </div>

                                    <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                                    <div class="bg-row"><span @click="setCategory('video')" class="route-link">Video</span></div>
                                    <div class="skills bg-row">
                                        Promotional,
                                        Live Streaming,
                                        Sports,
                                        Theatre,
                                        Visual Effects,
                                        Timelapse
                                    </div>

                                    <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                                    <div><span @click="setCategory('design')" class="route-link">Graphic Design</span></div>
                                    <div class="skills">
                                        Photoshop,
                                        Illustrator,
                                        SVG,
                                        Print,
                                        Posters
                                    </div>
                                </div>

                            </div>

                            <div class="header">Experience</div>
                            <div class="content-item">
                            
                                <div class="job-container">
                                    <div class="sub-header">BlueHealth Inc.</div>
                                    <div class="roles">Co-Founder, Lead Programmer</div>
                                    <div class="dates">2014 - Present</div>
                                </div>

                                <p>Built on the Laravel PHP framework, BlueHealth features a clean and responsive user interface focused on providing quick and easy data entry, searching, and reporting. Security is provided with an encrypted database, two factor authentication, group page and object permissions. VueJS is used extensively throughout the application for an interactive user experience. Websockets provide real time feedback and event broadcasting.</p>

                                <div class="job-container">
                                    <div class="sub-header">Brentwood College School</div>
                                    <div class="roles">Lead Web Designer, IT, Marketing</div>
                                    <div class="dates">2005 - Present</div>
                                </div>

                                <p>During my 13 years at Brentwood College School, a globally ranked private boarding school, I have worked in the IT and Marketing departments where I have been the lead programmer and content creator. My roles include developing the school's website, programming internal systems, creating all video productions, event photography, and graphic design.</p>

                            </div>

                            <div class="header">Other Experience</div>
                            <div class="content-item">

                                <div class="other-skills">

                                    <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                                    <div class="bg-row">Ubuntu Server Administration</div>
                                    <div class="skills bg-row">Digital Ocean, AWS, Apache, Nginx, MySQL, Node, Redis</div>

                                    <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                                    <div>Information Technology</div>
                                    <div>Hardware maintenance, Networking, Active Directory + Domain Administration, Software distribution, Virtual Machines</div>
                                    
                                    <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                                    <div class="bg-row">Coaching</div>
                                    <div class="bg-row skills">Volleyball, Football</div>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

    </body>
</html>
