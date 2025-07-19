import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 ease-out">
            {/* Minimal background decoration */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="mb-4 sm:mb-6 transition-opacity duration-700 delay-100">
                        <span className="text-black/70 text-sm font-medium px-4 py-1.5 bg-black/10 rounded-full backdrop-blur-sm">
                            Trusted by Students Worldwide
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight transition-all duration-700 delay-150">
                        Ready to Organize Your Notes?
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-black/70 mb-6 sm:mb-8 leading-relaxed px-4 transition-opacity duration-700 delay-200">
                        Start transforming your messy notes into organized bullet points instantly.
                        No signup, completely free.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto text-base px-8 sm:px-8 py-3 sm:py-4 bg-white text-black hover:bg-white/90 border border-black/10 shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <Link href="/summarize">
                                Start Now – It&apos;s Free
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                        {[
                            { title: "Free", subtitle: "Always & Forever" },
                            { title: "Instant", subtitle: "No Waiting" },
                            { title: "Private", subtitle: "Your Data Safe" },
                        ].map(({ title, subtitle }, idx) => (
                            <div
                                key={idx}
                                className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-black/10 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                            >
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white mb-1 sm:mb-2">
                                    {title}
                                </div>
                                <div className="text-black/70 dark:text-white/70 text-sm sm:text-base">
                                    {subtitle}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
