import Front from "@/Layouts/FrontLayout";
import SectionSocialLink from "@/Components/SectionSocialLink";
import { Link, Head } from "@inertiajs/react";

export default function Home({ auth, title }) {
    return (
        <Front>
            <Head title={title} />
            <section id="about" className="pt-36 pb-32">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2">
                            <h4 className="font-bold uppercase text-lg text-primary mb-3">
                                Tentang Kami
                            </h4>
                            <h2 className="font-bold text-3xl text-dark mb-5 max-w-md lg:text-4xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur, molestiae?
                            </h2>
                            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugiat repellendus, at totam
                                repudiandae similique aperiam animi tempora
                                expedita.
                            </p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                                Mari berkenalan
                            </h3>
                            <p className="font-medium text-balance text-secondary mb-6 lg:text-lg">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Deleniti ex incidunt saepe,
                                hic neque tenetur voluptatem? Error assumenda
                                velit dolore.
                            </p>
                            <div className="flex items-center">
                                <SectionSocialLink />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Front>
    );
}
