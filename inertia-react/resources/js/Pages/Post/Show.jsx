import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Post({ post, title }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-none p-3">
                        <div className="mb-2">
                            <Link
                                href={route("dashboard.posts.index")}
                                className="bg-yellow-200 mb-3 py-1 px-3 text-dark"
                            >
                                Back
                            </Link>
                        </div>
                        <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                        <hr />
                        <div className="flex justify-center mb-2 mt-2">
                            <img
                                className="border border-primary w-52"
                                src={"/storage/" + post.image}
                            />
                        </div>

                        <div className="text-md mb-2">{post.content}</div>
                        <div className="text-base">
                            <span className="font-bold">Categories:</span>{" "}
                            {post.categories_data.map((category, index) => (
                                <span
                                    className="inline-flex items-center border border-primary mb-1 px-1 py-1 mr-2 text-primary font-think text-xs tracking-widest"
                                    key={index}
                                >
                                    {category.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
