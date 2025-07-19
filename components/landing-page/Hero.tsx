import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import image from "@/public/images/image.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen mt-10 flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Top Badge and Heading */}
                    <div className="text-center mb-8 sm:mb-12 animate-fade-in-up duration-700">
                        <div className="mb-4 sm:mb-6 animate-pulse">
                            <span className="text-black/70 text-sm sm:text-base font-medium px-4 py-1.5 bg-black/10 rounded-full backdrop-blur-sm shadow-sm">
                                Free • No Signup Required
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight animate-fade-in-up animate-delay-100">
                            <span className="text-red-500">quick</span>{" "}
                            summarizer
                            <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-black/80 mt-2">
                                Turn Notes Into Bullet Points
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-black/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in-up animate-delay-200">
                            Paste your long-form notes and watch AI instantly transform them into organized bullet points.
                            No signup, no credit card required.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up animate-delay-300">
                            <Button
                                asChild
                                variant="default"
                                size="lg"
                                className="w-full sm:w-auto text-base px-6 sm:px-10 py-3 sm:py-4 bg-black text-white/90 hover:bg-black/90 transition-all duration-200 ease-in-out transform hover:scale-[1.03]"
                            >
                                <Link href="/summarize">
                                    Try It Now
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                                </Link>
                            </Button>
                            <p className="text-black/60 text-xs sm:text-sm text-center">
                                Free forever • Instant results • Privacy focused
                            </p>
                        </div>
                    </div>

                    {/* Demo preview */}
                    <div className="px-4 sm:px-0 animate-fade-in-up animate-delay-500">
                        <div className="bg-white/30 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-black/10 shadow-xl transition-all duration-300 hover:shadow-2xl">
                            <Image
                                src={image}
                                alt="Quick Summarizer Demo"
                                className="w-full rounded-md sm:rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.01]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
