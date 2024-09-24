import Front from "@/Layouts/FrontLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home({ auth, title }) {
    return (
        <Front>
            <Head title={title} />
            <section id="blog" className="pt-36 pb-32 bg-white">
                <div className="container mx-auto">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">
                                Blog
                            </h4>
                            <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">
                                Tulisan Terbaru
                            </h2>
                            <p className="font-medium text-md text-secondary md:text-lg">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Soluta numquam natus aperiam
                                iusto?
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap" id="blog-content">
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img
                                    src="dist/img/blog/1.jpeg"
                                    alt="Programming"
                                />
                                <div className="py-8 px-4">
                                    <h3>
                                        <a
                                            href="#"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                        >
                                            Tips Belajar Programming
                                        </a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-4">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Provident,
                                        repudiandae.
                                    </p>
                                    <a
                                        href="blog.html"
                                        className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                                    >
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img
                                    src="dist/img/blog/2.jpg"
                                    alt="Mechanical keyboard"
                                />
                                <div className="py-8 px-4">
                                    <h3>
                                        <a
                                            href="blog.html"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                        >
                                            Review Mechanical Keyboard
                                        </a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Esse repellendus, unde
                                        recusandae nesciunt rem optio.
                                    </p>
                                    <a
                                        href="#"
                                        className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                                    >
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img src="dist/img/blog/1.jpeg" alt="Coffe" />
                                <div className="py-8 px-4">
                                    <h3>
                                        <a
                                            href="blog.html"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                        >
                                            Menikmati Secangkir Kopi
                                        </a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Deleniti,
                                        reprehenderit.
                                    </p>
                                    <a
                                        href="blog.html"
                                        className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                                    >
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Front>
    );
}
