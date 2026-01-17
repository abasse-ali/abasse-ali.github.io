document.addEventListener('DOMContentLoaded', () => {
    const COLORS = {
        neon: '#00ff41',
        white: '#ffffff',
        black_bg: '#0a0a0a'
    };

    const cloud = document.querySelector('.effet-parallax');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        if(cloud) {
            cloud.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });

    const projects = [
        {
            id: 1,
            title: 'Config Réseau',
            category: 'INFRASTRUCTURE',
            description: "Configuration complète d'équipements réseau (Routeurs, Switchs) pour une architecture d'entreprise sécurisée.",
            fullDescription: "Conception et déploiement d'une architecture réseau complète pour une PME simulée. Mise en place de VLANs pour segmenter le trafic, configuration du routage inter-VLAN, et sécurisation des accès via ACLs. Implémentation de protocoles de redondance.",
            results: 'Segmentation réseau efficace, latence réduite de 40%, sécurité renforcée.',
            tech: ['Cisco Packet Tracer', 'VLAN', 'OSPF', 'ACL', 'NAT'],
            icon: 'server',
            links: { demo: '#' }
        },
        {
            id: 2,
            title: 'Annuaire Partagé Client-Serveur',
            category: 'DEVELOPPEMENT',
            description: "Application Python simulant une architecture réseau pour la gestion collaborative de contacts avec système de permissions.",
            fullDescription: "Conception d'une architecture Client-Serveur simulée (sans sockets) utilisant l'échange de fichiers JSON (PDU) pour le protocole réseau. Le projet intègre une persistance des données en CSV, une authentification sécurisée (SHA-512), un lanceur multi-OS et une gestion granulaire des droits d'accès aux carnets d'adresses entre utilisateurs.",
            results: 'Simulation protocolaire fonctionnelle sur Windows/Linux/macOS avec lancement automatisé multi-terminaux et sécurisation des données.',
            tech: ['Python', 'JSON & CSV', 'Architecture Client-Serveur', 'SHA-512'],
            icon: 'server', 
            links: {
                github: "https://github.com/abasse-ali/annuaire-partage"
             }
        },
        {
            id: 3,
            title: 'Quiz Administration Système Linux',
            category: 'ADMINISTRATION SYSTEME',
            description: "Application web interactive pour l'évaluation des compétences en administration système, virtualisation et scripting Bash.",
            fullDescription: "Développement d'un moteur de quiz dynamique en JavaScript (Vanilla) intégrant l'algorithme de Fisher-Yates pour la randomisation. Le contenu couvre des concepts avancés : Architecture Noyau vs User space, Virtualisation (KVM) vs Conteneurisation (LXC), Gestion des paquets (APT/DPKG), Sécurité SSH et droits d'accès UNIX.",
            results: 'Plateforme pédagogique fonctionnelle avec feedback immédiat, explications contextuelles détaillées et gestion aléatoire de 50+ questions techniques.',
            tech: ['Linux System Admin', 'JavaScript', 'Virtualization', 'Bash', 'HTML5/CSS3'],
            icon: 'terminal',
            links: {
                demo: "https://abasse-ali.github.io/qcm_Linux",
                github: "https://github.com/abasse-ali/qcm_Linux"
            }
        },
    ];

    const skillsData = [
        { id: 'cisco', label: 'CISCO CCNA', icon: 'network', x: 50, y: 40, size: 130, type: 'core', level: 'Expert', desc: 'Config routeurs/switchs, VLAN, OSPF' },
        { id: 'huawei', label: 'HUAWEI', icon: 'server', x: 30, y: 50, size: 120, type: 'core', level: 'Avancé', desc: 'Équipements Huawei HCIA, Datacom' },
        { id: 'python', label: 'PYTHON', icon: 'code', x: 70, y: 50, size: 120, type: 'core', level: 'Avancé', desc: 'Scripting réseau, automatisation' },
        { id: 'linux', label: 'LINUX', icon: 'terminal', x: 50, y: 65, size: 120, type: 'core', level: 'Expert', desc: 'Admin sys, Bash, Services' },

        { id: 'routing', label: 'Routage', icon: 'wifi', x: 30, y: 30, size: 100, type: 'tech', level: 'Avancé', desc: 'OSPF, BGP, EIGRP' },
        { id: 'wireshark', label: 'Wireshark', icon: 'shield', x: 70, y: 30, size: 100, type: 'tech', level: 'Avancé', desc: 'Analyse paquets, troubleshooting' },
        { id: 'winserver', label: 'Win Server', icon: 'layers', x: 15, y: 60, size: 100, type: 'tech', level: 'Inter.', desc: 'AD, DNS, DHCP, GPO' },
        { id: 'html', label: 'HTML/CSS', icon: 'globe', x: 85, y: 60, size: 100, type: 'tech', level: 'Inter.', desc: 'Structure web, CSS moderne' },
        { id: 'packet', label: 'Packet Tracer', icon: 'network', x: 50, y: 20, size: 100, type: 'tech', level: 'Expert', desc: 'Simulation architectures complexes' },
 
        { id: 'team', label: 'Équipe', icon: 'users', x: 15, y: 40, size: 80, type: 'soft', level: 'Soft', desc: 'Collaboration agile' },
        { id: 'org', label: 'Org.', icon: 'brain', x: 85, y: 40, size: 80, type: 'soft', level: 'Soft', desc: 'Gestion du temps' },
        { id: 'serious', label: 'Sérieux', icon: 'clock', x: 50, y: 85, size: 80, type: 'soft', level: 'Soft', desc: 'Rigueur et fiabilité' }
    ];

    const connections = [
        ['cisco', 'huawei'], ['cisco', 'python'], ['cisco', 'linux'],
        ['huawei', 'linux'], ['python', 'linux'], ['cisco', 'routing'],
        ['cisco', 'wireshark'], ['huawei', 'winserver'], ['python', 'html'],
        ['huawei', 'team'], ['python', 'org'], ['cisco', 'packet'], ['linux', 'serious']
    ];

    function initLoader() {
        if (typeof lucide !== 'undefined') lucide.createIcons();
        initScrollObserver();
        
        const navbar = document.getElementById('navbar');
        const heroLine = document.getElementById('hero-line');
        
        if (navbar) navbar.style.transform = 'translateY(0)';
        if (heroLine) heroLine.style.width = '64px';
    }

    function initParticles() {
        const particleContainer = document.getElementById('particle-container');
        if (!particleContainer) return;

        for (let i = 0; i < 40; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 3 + 1;
            p.className = 'absolute rounded-full bg-neon-green opacity-0';
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.boxShadow = `0 0 4px ${COLORS.neon}`;
            p.style.animation = `float ${Math.random() * 20 + 10}s linear ${Math.random() * 5}s infinite`;
            p.style.transition = 'opacity 1s';
            p.style.opacity = Math.random() * 0.4;
            particleContainer.appendChild(p);
        }
    }

    function initSkillsMap() {
        const skillsContainer = document.getElementById('skills-container');
        const connectionsLayer = document.getElementById('connections-layer');

        if (!skillsContainer || !connectionsLayer) return;

        connections.forEach((conn) => {
            const start = skillsData.find(s => s.id === conn[0]);
            const end = skillsData.find(s => s.id === conn[1]);
            if (start && end) {

                const lineBase = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                lineBase.setAttribute('x1', `${start.x}%`);
                lineBase.setAttribute('y1', `${start.y}%`);
                lineBase.setAttribute('x2', `${end.x}%`);
                lineBase.setAttribute('y2', `${end.y}%`);
                lineBase.setAttribute('stroke', COLORS.neon);
                lineBase.setAttribute('stroke-width', '1');
                lineBase.setAttribute('stroke-opacity', '0.2');
                connectionsLayer.appendChild(lineBase);

                const linePacket = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                linePacket.setAttribute('x1', `${start.x}%`);
                linePacket.setAttribute('y1', `${start.y}%`);
                linePacket.setAttribute('x2', `${end.x}%`);
                linePacket.setAttribute('y2', `${end.y}%`);
                linePacket.setAttribute('stroke', COLORS.neon);
                linePacket.setAttribute('stroke-width', '2');
                linePacket.setAttribute('stroke-linecap', 'round');
                linePacket.classList.add('data-packet');
                linePacket.style.animationDelay = `${Math.random() * 5}s`;
                linePacket.style.filter = `drop-shadow(0 0 4px ${COLORS.neon})`;
                connectionsLayer.appendChild(linePacket);
            }
        });

        skillsData.forEach((skill) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'hex-wrapper';
            wrapper.style.left = `${skill.x}%`;
            wrapper.style.top = `${skill.y}%`;
            
            const floatDuration = (Math.random() * 3 + 3).toFixed(2);
            const floatDelay = (Math.random() * 2).toFixed(2);
            
            let color = COLORS.neon;
            let iconColorClass = 'text-neon-green';
            let labelColorClass = 'text-gray-300';
            let glowClass = skill.type === 'core' ? 'glow-pulse' : 'glow-static';

            if (skill.type === 'soft') { 
                color = COLORS.white; 
                iconColorClass = 'text-white'; 
                labelColorClass = 'text-white';
                glowClass = '';
            }
            if (skill.type === 'core') { 
                labelColorClass = 'text-white'; 
            }

            wrapper.innerHTML = `
                <div class="hex-animator" style="animation: organic-float ${floatDuration}s ease-in-out infinite; animation-delay: -${floatDelay}s;">
                    <div class="hex-cell ${glowClass}" style="width: ${skill.size}px; height: ${skill.size}px;">
                        <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full overflow-visible">
                            <path class="hex-border" d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="${color}" />
                            <path class="hex-detail" d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="${color}" />
                        </svg>
                        <div class="relative z-10 flex flex-col items-center justify-center text-center p-2">
                            <i data-lucide="${skill.icon}" class="skill-icon w-8 h-8 mb-2 transition-transform duration-300 ${iconColorClass}"></i>
                            <span class="skill-label font-bold font-share-tech text-xs tracking-wide transition-colors duration-300 ${labelColorClass}">${skill.label}</span>
                        </div>
                    </div>
                    <div class="skill-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-black border border-neon-green p-3 rounded-sm opacity-0 pointer-events-none transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                        <div class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r border-b border-neon-green transform rotate-45"></div>
                        <h4 class="text-neon-green font-orbitron text-xs font-bold mb-1">${skill.label}</h4>
                        <div class="flex items-center gap-2 mb-2">
                            <div class="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
                                <div class="h-full bg-neon-green" style="width: ${skill.level === 'Expert' ? '100%' : skill.level === 'Avancé' ? '75%' : '50%'}"></div>
                            </div>
                            <span class="text-[10px] text-gray-400 font-share-tech uppercase">${skill.level}</span>
                        </div>
                        <p class="text-[10px] text-gray-300 leading-tight font-sans">${skill.desc}</p>
                    </div>
                </div>
            `;
            
            const tooltip = wrapper.querySelector('.skill-tooltip');
            wrapper.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translate(-50%, 0)';
            });
            wrapper.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translate(-50%, 10px)';
            });

            skillsContainer.appendChild(wrapper);
        });
    }

    function initProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        const projectModal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal');
        const modalBackdrop = document.getElementById('modal-backdrop');

        if (!projectsGrid) return;

        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'relative group cursor-pointer reveal-on-scroll project-card-trigger';
            card.style.transitionDelay = `${index * 0.2}s`;
            card.setAttribute('data-id', project.id);
            
            const techStack = project.tech.slice(0, 3).map(t => `<span class="text-[10px] px-2 py-1 border border-gray-700 rounded-sm text-gray-300 font-share-tech">${t}</span>`).join('');
            const extraTech = project.tech.length > 3 ? `<span class="text-[10px] px-2 py-1 text-gray-500 font-share-tech">+${project.tech.length - 3}</span>` : '';
            const floatDelay = (Math.random() * 2).toFixed(2);

            card.innerHTML = `
                <div class="absolute inset-0 bg-neon-green bg-opacity-5 clip-path-hex transform transition-transform duration-500 group-hover:scale-105 border border-neon-green/20"></div>
                <div class="relative p-8 flex flex-col items-center text-center h-full min-h-[400px] justify-between z-10">
                    <div class="mb-6 relative w-[80px] h-[80px]">
                        <div class="hex-animator absolute inset-0" style="animation: organic-float 4s ease-in-out infinite; animation-delay: -${floatDelay}s;">
                            <div class="hex-cell glow-pulse" style="width: 80px; height: 80px;">
                                <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full overflow-visible">
                                    <path class="hex-border" d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="${COLORS.neon}" />
                                    <path class="hex-detail" d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="${COLORS.neon}" />
                                </svg>
                                <div class="relative z-10 flex flex-col items-center justify-center p-2">
                                    <i data-lucide="${project.icon}" class="w-8 h-8 text-neon-green transition-transform duration-300 group-hover:scale-110 group-hover:text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <span class="text-xs font-share-tech tracking-widest opacity-60 text-neon-green mb-2 block">${project.category}</span>
                        <h3 class="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-neon-green transition-colors">${project.title}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">${project.description}</p>
                    </div>
                    <div class="flex flex-wrap justify-center gap-2 mb-6">${techStack} ${extraTech}</div>
                    <div class="flex items-center gap-2 text-sm font-bold text-white group-hover:text-neon-green transition-colors font-orbitron pointer-events-none">
                        ACCESS DATA <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        if (projectModal) {
            const openModal = (project) => {
                document.getElementById('modal-category').innerText = `PROJECT_ID: ${project.category}`;
                document.getElementById('modal-title').innerText = project.title;
                document.getElementById('modal-desc').innerText = project.fullDescription;
                document.getElementById('modal-results').innerText = project.results;
                document.getElementById('modal-tech').innerHTML = project.tech.map(t => `<span class="px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-share-tech rounded-sm">${t}</span>`).join('');
                
                let linksHtml = '';
                if (project.links.github) linksHtml += `<a href="${project.links.github}" class="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm hover:bg-neon-green transition-colors rounded-sm"><i data-lucide="github" class="w-4 h-4"></i> SOURCE CODE</a>`;
                if (project.links.demo) linksHtml += `<a href="${project.links.demo}" class="flex items-center gap-2 px-4 py-2 border border-neon-green text-neon-green font-bold text-sm hover:bg-neon-green/10 transition-colors rounded-sm"><i data-lucide="external-link" class="w-4 h-4"></i> LIVE DEMO</a>`;
                document.getElementById('modal-links').innerHTML = linksHtml;
                
                if (typeof lucide !== 'undefined') lucide.createIcons();
                
                projectModal.classList.remove('hidden');
                projectModal.classList.add('flex');
                setTimeout(() => {
                    projectModal.classList.add('open');
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            };

            const closeModal = () => {
                projectModal.classList.remove('open');
                modalContent.classList.remove('scale-100', 'opacity-100');
                modalContent.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    projectModal.classList.add('hidden');
                    projectModal.classList.remove('flex');
                }, 300);
            };

            document.querySelectorAll('.project-card-trigger').forEach(card => {
                card.addEventListener('click', () => {
                    const project = projects.find(p => p.id === parseInt(card.getAttribute('data-id')));
                    if (project) openModal(project);
                });
            });

            if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
            if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
        }
    }

    function initNavigation() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        const closeMenu = () => {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            menuBtn.innerHTML = '<i data-lucide="menu"></i>';
            if (typeof lucide !== 'undefined') lucide.createIcons();
        };

        if (menuBtn) {
            setTimeout(() => { menuBtn.classList.remove('scale-0'); }, 3000);
            menuBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    menuBtn.innerHTML = '<i data-lucide="x"></i>';
                } else {
                    closeMenu();
                }
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        }

        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
    }

    function initScrollObserver() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        const navContainer = document.querySelector('#navbar > div');
        const scrollIndicator = document.getElementById('scroll-indicator');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('draw-path')) entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        document.querySelectorAll('.draw-path').forEach(el => observer.observe(el));

        window.addEventListener('scroll', () => {

            if (navContainer) {
                if (window.scrollY > 50) {
                    navContainer.classList.add('bg-black/90', 'backdrop-blur-md', 'border-neon-green/30');
                    navContainer.classList.remove('bg-transparent', 'border-transparent');
                } else {
                    navContainer.classList.remove('bg-black/90', 'backdrop-blur-md', 'border-neon-green/30');
                    navContainer.classList.add('bg-black/80', 'backdrop-blur-sm', 'border-transparent');
                }
            }


            if (scrollIndicator) {
                if (window.scrollY > 50) {
                    scrollIndicator.style.opacity = '0';
                    scrollIndicator.style.visibility = 'hidden';
                } else {
                    scrollIndicator.style.opacity = '1';
                    scrollIndicator.style.visibility = 'visible';
                }
            }


            let current = '';
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            if (window.scrollY < 200) current = 'hero';

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
        

        window.dispatchEvent(new Event('scroll'));
    }

    initParticles();
    initSkillsMap();
    initProjects();
    initNavigation();
    initLoader();
});