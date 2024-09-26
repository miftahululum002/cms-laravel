import Front from "@/Layouts/FrontLayout";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Read({ title, post }) {
    const home_categories = usePage().props.home_categories;
    console.log(home_categories);
    return (
        <Front>
            <Head title={title} />
            <section id="blog" className="pt-36 pb-32 bg-white">
                <div className="container mx-auto flex">
                    <div className="w-4/5 px-4">
                        <div className="max-w-xl mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">
                                {post.title}
                            </h4>
                            <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">
                                {post.title}
                            </h2>
                            <p className="font-medium text-md text-secondary md:text-lg">
                                {post.content}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/5 px-2 border border-primary">
                        <span className="font-bold text-xl text-primary mb-2">
                            Kategori
                        </span>
                        {home_categories.map((category, index) => (
                            <div className="w-full text-md text-primary mb-1">
                                <a
                                    href={
                                        route("home.blog.index") +
                                        "?category=" +
                                        category.slug
                                    }
                                >
                                    {category.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Front>
    );
}
