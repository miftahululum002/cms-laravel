import DangerButton from "@/Components/DangerButton";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";

export default function Post({ posts, title }) {
    const [confirmingPostDeletion, setConfirmingPostDeletion] = useState(false);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        clearErrors,
    } = useForm();

    const confirmPostDeletion = (id) => {
        setData("id", id);
        setConfirmingPostDeletion(true);
    };

    const closeModal = () => {
        setConfirmingPostDeletion(false);
        clearErrors();
        reset();
    };

    const handlePostDelete = (e) => {
        e.preventDefault();
        destroy(route("dashboard.posts.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };
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
                        <div>
                            <LinkButton
                                href={route("dashboard.posts.create")}
                                className="bg-primary mb-2 py-1 text-white"
                            >
                                Add New
                            </LinkButton>
                        </div>
                        <table className="table-auto w-full border-collapse border border-slate-400">
                            <thead className="border border-slate-300 my-4">
                                <tr>
                                    <th className="w-auto px-2 border border-slate-400">
                                        No
                                    </th>
                                    <th className="w-auto px-2 border border-slate-400 text-left">
                                        Title
                                    </th>
                                    <th className="w-auto px-2 border border-slate-400 text-left">
                                        Categories
                                    </th>
                                    <th className="w-auto px-2 border border-slate-400 text-left">
                                        Content
                                    </th>
                                    <th className="w-auto px-2 border border-slate-400 text-left">
                                        Image
                                    </th>
                                    <th className="border border-slate-400 text-center">
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.data.map((post, index) => (
                                    <tr key={index}>
                                        <td className="w-auto px-2 border border-slate-400 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            {post.title}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            {post.categories_data.map(
                                                (category, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center border border-primary mb-1 px-1 py-1 mr-2 text-primary font-think text-xs tracking-widest"
                                                    >
                                                        {category.name}
                                                    </span>
                                                )
                                            )}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            {post.content}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            <img
                                                className="border border-primary w-52"
                                                src={"/storage/" + post.image}
                                            />
                                        </td>
                                        <td className="px-2 border border-slate-400 text-center">
                                            <Link
                                                href={route(
                                                    "dashboard.posts.show",
                                                    post.id
                                                )}
                                                className="inline-flex text-primary font-bold justify-center items-center w-full"
                                            >
                                                Show
                                            </Link>
                                            <Link
                                                href={route(
                                                    "dashboard.posts.edit",
                                                    post.id
                                                )}
                                                className="inline-flex items-center px-2 py-1 mb-2 bg-primary border border-transparent rounded-none font-semibold text-xs text-white tracking-widest hover:bg-opacity-7 focus:bg-gray-700 active:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                            >
                                                Edit
                                            </Link>
                                            <DangerButton
                                                onClick={(e) =>
                                                    confirmPostDeletion(post.id)
                                                }
                                            >
                                                Delete
                                            </DangerButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination links={posts.links} />
                    </div>
                </div>
            </div>
            <Modal show={confirmingPostDeletion} onClose={closeModal}>
                <form onSubmit={handlePostDelete} className="p-6">
                    <TextInput type="hidden" name="id" id="post_id" />
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete this post?
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Once post is deleted, all of its resources and data will
                        be permanently deleted.
                    </p>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton
                            className="rounded-none"
                            onClick={closeModal}
                        >
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
