@extends ('static')
@section ('content')

    <div class="top" id="top">
        <div class="name-title">
            <div class="title">Mike Minckler</div>
            <div class="sub-title">IT Administration</div>
            <div class="email-phone">
                <div class="email"><a @click.stop="" href="mailto:mikeminckler@gmail.com">mikeminckler@gmail.com</a></div>
                <div class="phone"><a @click.stop="" href="tel:+12507017414">+12507017414</a></div>
            </div>
        </div>
    </div>

    <div class="middle">

        <div class="content-area color1">

            <div class="category-title">

                <div class="header show">IT Administrator & Support Specialist</div>

                <div class="header-icon">
                    <img src="/images/categories/undraw_co-workers_ujs6.svg" class="category-image" />
                </div>

            </div>

            <div class="router-area route">

                <div class="content-item">

                    <p>For the past 13 years, I have worked in the Information Technology sector focusing on server and network adminstration, helpdesk support, and web server management. At Brentwood College School, a world class private boarding school, I support an organizational user base of over 600 people who possess a wide range of skill and experience.</p>

                    <p>I have exceptional problem solving skills and have demonstrated the ability to learn new technologies at a rapid pace. My many years of experince has lead to a broad understanding of the technology powering many IT infastructures.</p>

                </div>

                <div class="header">Core Skills</div>
                <div class="content-item">

                    <div class="core-skills">
                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Server Administration</div>
                        <div class="skills bg-row">VmWare, Ubuntu, Digital Ocean, AWS, MySQL, Apache, Nginx, Node, Redis</div>

                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Domain Managment</div>
                        <div class="skills bg-row">Active Directory, Print Server</div>

                        <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                        <div>Helpdesk Support</div>
                        <div class="skills">Helpdesk ticketing system, Windows, OSX, hardware and software troubleshooting</div>

                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Software Training</div>
                        <div class="skills bg-row">Group training sessions, individual training, Adobe suite, Google Suite</div>

                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Software Distribution</div>
                        <div class="skills bg-row">Windows, OSX, iOS</div>

                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Networking</div>
                        <div class="skills bg-row">Meraki Management of DNS, DHCP, VLANS, Firewall, Wireless</div>

                    </div>

                </div>

                <div class="header">Experience</div>
                <div class="content-item">
                
                    <div class="job-container">
                        <div class="sub-header">Brentwood College School</div>
                        <div class="roles">Server Administrator, Networking, Helpdesk</div>
                        <div class="dates">2005 - Present</div>
                    </div>

                    <p>During my 13 years at Brentwood College School, a globally ranked private boarding school, I have worked in the IT department where I have supported a variety of different technologies.</p>

                    <p>The majority of my early years was spent providing helpdesk support. My tasks included software and hardware trouble shooting, software distribution, Active Directory management.Through my time providing front line support I was trained on server management and was subsequently given further responsibilites for managing the school's web server and Active Directory.</p> 

                    <p>I have also worked on our local network installing, upgrading, and configuring switches and wireless access points. I have experince with the full range of Meraki products along with our older legacy 3com equipment. Most recently I have been the lead tech for all webservers where I manage Apache, Nginx, Laravel, NodeJS, Redis, Wordpres, and Typo3.</p>

                    <p>The most valuable skill I have developed while working at Brentwood has been my ability to adapt to changing technologies and provide a postiive transition to the community through proactive education and communication.</p>

                </div>

                <div class="header">Other Experience</div>
                <div class="content-item">

                    <div class="other-skills">

                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Web Development & Content Creation</div>
                        <div class="bg-row skills"><a href="https://minckler.ca" target="_blank">Online Portfolio</a>, Programming, Video Production, Photography, Graphic Design</div>
                        
                        <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                        <div class="bg-row">Coaching</div>
                        <div class="bg-row skills">Volleyball, Football</div>

                    </div>

                </div>


            </div>
        </div>
    </div>

@endsection
