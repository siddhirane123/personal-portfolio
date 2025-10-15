import { ArrowRight, Code, MapPin } from "lucide-react"
import { Button } from "./ui/button";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 text-white"   style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">About</h2>
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dedicated Software Developer</h3>
                            <p className="max-w-[600px] text-yellow-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                With 3.10 years of experience specializing in modern web technologies
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Mumbai, India</span>
                        </div>
                        <ul className="grid gap-3">
                            <li className="flex items-start gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Code className="h-3 w-3" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Frontend Specialist</p>
                                    <p className="text-sm text-orange-300">
                                        Proficient in React.js, Next.js, SvelteKit, and EJS
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Code className="h-3 w-3" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Ad Technology Integration</p>
                                    <p className="text-sm text-orange-300">
                                        Google Ads, MGID, Taboola, and innovative ad implementations
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Code className="h-3 w-3" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Performance Optimization</p>
                                    <p className="text-sm text-orange-300">
                                        AMP development, SEO optimization, and frontend performance
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <Button
                            asChild
                            className="flex items-center gap-2 bg-[#1e81b0] w-max text-neutral-300"
                        >
                            <a
                                href="https://drive.google.com/file/d/1nxMkIYx-zGRKsE_RpwcnxPnRb6TwC4gS_dgWEH-u81A/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                <ArrowRight className="h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                alt="Developer at work"
                                className="aspect-square object-none object-center"
                                height="650"
                                src="/assets/developer-lady.png"
                                width="650"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
