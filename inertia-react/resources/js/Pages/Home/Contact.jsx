import Front from "@/Layouts/FrontLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home({ title }) {
    return (
        <Front>
            <Head title={title} />
            <section id="contact" className="w-full pt-36 pb-32">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">
                                Kontak Kami
                            </h4>
                            <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">
                                Hubungi Kami
                            </h2>
                            <p className="font-medium text-md text-secondary md:text-lg">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Vero, cupiditate!
                            </p>
                        </div>
                    </div>
                    <form>
                        <div className="w-full lg:w-2/3 lg:mx-auto">
                            <div className="w-full px-4 mb-8">
                                <label
                                    htmlFor="name"
                                    className="text-base font-bold text-primary"
                                >
                                    Nama <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full text-dark p-3 rounded-none focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                                    placeholder="Nama"
                                />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label
                                    htmlFor="email"
                                    className="text-base font-bold text-primary"
                                >
                                    Email
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full text-dark p-3 rounded-none focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label
                                    htmlFor="message"
                                    className="text-base font-bold text-primary"
                                >
                                    Pesan
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full text-dark p-3 rounded-none focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                                    placeholder="Pesan"
                                ></textarea>
                            </div>
                            <div className="w-full px-4">
                                <button
                                    type="button"
                                    className="text-base text-white bg-primary py-2 px-8 rounded-none w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                                >
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Front>
    );
}
