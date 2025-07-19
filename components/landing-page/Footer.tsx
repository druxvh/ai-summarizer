import { ExternalLink } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            <span className="text-red-500">quick</span>{" "}summarizer
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                            Transform your notes into organized bullet points instantly
                        </p>
                    </div>

                    <div className="text-xs text-muted-foreground">
                        built by{" "}
                        <a
                            href="https://www.x.com/druxvh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:underline inline-flex items-center gap-1"
                        >
                            @druxvh
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;