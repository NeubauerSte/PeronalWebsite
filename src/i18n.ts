import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "de",

    resources: {
        de: {
            translation: {
                nav: {
                    about: "ÜBER",
                    projects: "PROJEKTE",
                    learning: "LERNEN"
                },
                hero: {
                    title: "Ich bin Stefan,",
                    subtitle: "Ich baue Web-Erlebnisse, die nicht nur gut aussehen, sondern auch funktionieren.",

                    cards: {
                        performance: {
                            title: "Performance",
                            text: "Blitzschnelle Seiten durch optimierten Code."
                        },
                        design: {
                            title: "Design",
                            text: "Ästhetik, die nicht schreit – sondern wirkt."
                        },
                        code: {
                            title: "Code",
                            text: "Modular. Lesbar. Nachhaltig gedacht."
                        }
                    }
                },
                cv: "CV herunterladen",
                language: "Sprache",

                about: {
                    headline: "ÜBER MICH",
                    p1: "Ich bin ein kreativer Entwickler mit Fokus auf modernes Webdesign, User Experience und visuelle Ästhetik.",
                    p2: "Mein Ziel ist es, durch klare Strukturen und starke visuelle Effekte Erlebnisse zu schaffen, die im Gedächtnis bleiben. Ich liebe es, Technik und Design zu verbinden – und Seiten zu bauen, die man fühlt.",
                    p3: "Der Fokus liegt auf durchdachtem Code, Geschwindigkeit und stilistischer Tiefe. Ob persönliche Projekte oder Kundenplattformen – ich gestalte mit Blick für’s Detail."
                },

                projects: {
                    title: "PROJEKTE",
                    list: [
                        {
                            title: "Diese Website",
                            text: "Portfolio-Site mit Custom UI, Glow-Effekten, animierten Dividern und framer-motion."
                        },
                        {
                            title: "ToDo-App",
                            text: "Task-Verwaltung mit Authentifizierung, API, Datenbank und Dockerized Deployment."
                        },
                        {
                            title: "SmartCamera (Diplom)",
                            text: "Electron.js Anwendung mit Webcam, AI Detection, Tensorflow, Mailserver & UI."
                        }
                    ],
                    github: "Repository ansehen"
                },

                learning: {
                    headlines: {
                        left: "Lernen TO-DO",
                        right: "Projekte TO-DO"
                    },
                    left: {
                        angular: "Angular",
                        reactNative: "React Native",
                        nextjs: "Next.js"
                    },
                    right: {
                        platform: "Community-Plattform mit Videokursen",
                        membership: "inkl. Bezahlsystem & Membership-Management",
                        bachelor: "Bachelor Wirtschaftsinformatik"
                    }
                }
            }
        },

        en: {
            translation: {
                nav: {
                    about: "ABOUT",
                    projects: "PROJECTS",
                    learning: "LEARNING"
                },
                hero: {
                    title: "Hi, I'm Stefan",
                    subtitle: "I create web experiences that not only look great but also work flawlessly.",

                    cards: {
                        performance: {
                            title: "Performance",
                            text: "Blazing-fast pages through optimized code."
                        },
                        design: {
                            title: "Design",
                            text: "Aesthetics that don’t scream – but resonate."
                        },
                        code: {
                            title: "Code",
                            text: "Modular. Readable. Built to last."
                        }
                    }
                },
                cv: "Download CV",
                language: "Language",

                about: {
                    headline: "ABOUT ME",
                    p1: "I'm a creative developer focused on modern web design, user experience, and visual aesthetics.",
                    p2: "My goal is to create memorable experiences through clear structure and powerful visuals. I love combining technology and design — building websites that are felt, not just seen.",
                    p3: "I focus on thoughtful code, speed, and stylistic depth. Whether personal projects or client platforms — I design with attention to detail."
                },

                projects: {
                    title: "PROJECTS",
                    list: [
                        {
                            title: "This Website",
                            text: "Portfolio site with custom UI, glow effects, animated dividers, and framer-motion."
                        },
                        {
                            title: "ToDo App",
                            text: "Task management with authentication, API, database, and Dockerized deployment."
                        },
                        {
                            title: "SmartCamera (Diploma)",
                            text: "Electron.js application with webcam, AI detection, TensorFlow, mail server, and UI."
                        }
                    ],
                    github: "View Repository"
                },

                learning: {
                    headlines: {
                        left: "Learning TO-DO",
                        right: "Projects TO-DO"
                    },
                    left: {
                        angular: "Angular",
                        reactNative: "React Native",
                        nextjs: "Next.js"
                    },
                    right: {
                        platform: "Community platform with video courses",
                        membership: "Including payment system & membership management",
                        bachelor: "Bachelor of Business Informatics"
                    }
                }
            }
        }
    },

    interpolation: {
        escapeValue: false
    }
})

export default i18n