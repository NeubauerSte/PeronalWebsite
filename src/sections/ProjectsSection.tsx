import { Card, CardContent } from "../components/ui/Card"
import { TurquoiseDivider } from "../components/ui/Divider"
import TextSection from "./TextSection.tsx"
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"
import * as SiIcons from "react-icons/si"
import Tooltip from "../components/ui/Tooltip.tsx"
import { useTranslation } from "react-i18next"

export default function ProjectsSection() {
    const { t } = useTranslation()

    const projects = t("projects.list", { returnObjects: true }) as { title: string, text: string }[]

    const stackMap = [
        [
            { icon: FaIcons.FaReact, title: "React" },
            { icon: SiIcons.SiTypescript, title: "TypeScript" },
            { icon: SiIcons.SiTailwindcss, title: "Tailwind" }
        ],
        [
            { icon: SiIcons.SiSpringboot, title: "Spring Boot" },
            { icon: SiIcons.SiPostgresql, title: "PostgreSQL" },
            { icon: FaIcons.FaDocker, title: "Docker" },
            { icon: FaIcons.FaReact, title: "React" },
            { icon: SiIcons.SiTailwindcss, title: "Tailwind" }
        ],
        [
            { icon: FaIcons.FaReact, title: "React" },
            { icon: SiIcons.SiTensorflow, title: "Tensorflow" }
        ]
    ]

    const githubLinks = [
        "https://github.com/NeubauerSte/PeronalWebsite",
        "https://github.com/NeubauerSte/todoapp",
        "https://github.com/NeubauerSte/SmartCamera"
    ]

    return (
        <section id="projects" className="max-w-6xl mx-auto md:px-6 px-3 py-24">
            <TextSection title={t("projects.title")}>
                <TurquoiseDivider className="mb-6 mt-3 max-w-md mx-auto brightness-50" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {projects.map((item, i) => (
                        <Card key={i} className="flex flex-col h-full rounded-3xl">
                            <CardContent className="flex flex-col items-center justify-between text-center h-full px-4 pt-6 pb-4">
                                <h3 className="text-xl font-bold font-future text-white mb-3">{item.title}</h3>
                                <p
                                    className="text-gray-300 text-sm leading-relaxed flex-grow"
                                    style={{ fontFamily: 'var(--font-mono)', lineHeight: '1.75rem' }}
                                >
                                    {item.text}
                                </p>
                            </CardContent>

                            <div className="w-full px-4 pb-4 text-sm text-center text-white/60">
                                <div className="flex flex-wrap gap-2 justify-center items-center text-xl mb-3">
                                    {stackMap[i].map(({ icon: Icon, title }, idx) => (
                                        <Tooltip key={idx} text={title}>
                                            <span className="hover:scale-105 transition-transform duration-200 cursor-default">
                                                <Icon />
                                            </span>
                                        </Tooltip>
                                    ))}
                                </div>

                                <TurquoiseDivider className="my-3 w-full mx-auto opacity-25" />

                                <a
                                    href={githubLinks[i]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline hover:scale-105 transition-transform duration-300"
                                >
                                    <FaIcons.FaGithub className="text-lg" />
                                    <span className="font-medium">{t("projects.github")}</span>
                                    <FiIcons.FiArrowUpRight className="text-sm mt-[1px]" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </TextSection>
        </section>
    )
}