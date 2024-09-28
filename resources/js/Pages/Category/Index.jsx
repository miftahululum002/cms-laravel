import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";

export default function Categories({ categories, title }) {
    const [confirmingCategoryDeletion, setConfirmingCategoryDeletion] =
        useState(false);

    const [confirmingCategoryActivation, setConfirmingCategoryActivation] =
        useState(false);
    const {
        data,
        setData,
        delete: destroy,
        patch,
        processing,
        reset,
        clearErrors,
    } = useForm();

    const confirmCategoryDeletion = (id) => {
        setData("id", id);
        setConfirmingCategoryDeletion(true);
    };
    const confirmCategoryActivation = (id) => {
        setData("id", id);
        setConfirmingCategoryActivation(true);
    };

    const closeModal = () => {
        setConfirmingCategoryDeletion(false);
        clearErrors();
        reset();
    };
    const closeModalActivation = () => {
        setConfirmingCategoryActivation(false);
        clearErrors();
        reset();
    };

    const handleCategoryDelete = (e) => {
        e.preventDefault();
        destroy(route("dashboard.categories.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };
    const handleCategoryActivate = (e) => {
        e.preventDefault();
        patch(route("dashboard.categories.activate"), {
            preserveScroll: true,
            onSuccess: () => closeModalActivation(),
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
                                href={route("dashboard.categories.create")}
                                className="bg-primary mb-2 py-2 text-white"
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
                                        Name
                                    </th>

                                    <th className="w-auto px-2 border border-slate-400 text-left">
                                        Slug
                                    </th>

                                    <th className="border border-slate-400 text-center">
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td className="w-auto px-2 border border-slate-400 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            {category.name}
                                        </td>

                                        <td className="w-auto px-2 border border-slate-400">
                                            {category.slug}
                                        </td>

                                        <td className="px-2 border border-slate-400 text-center">
                                            {category.is_deleted == "1" ? (
                                                <>
                                                    <PrimaryButton
                                                        onClick={(e) =>
                                                            confirmCategoryActivation(
                                                                category.id
                                                            )
                                                        }
                                                    >
                                                        Restore
                                                    </PrimaryButton>
                                                </>
                                            ) : (
                                                <>
                                                    <Link
                                                        href={
                                                            route(
                                                                "home.blog.index"
                                                            ) +
                                                            "?category=" +
                                                            category.slug
                                                        }
                                                        className="inline-flex text-primary font-bold justify-center items-center w-full"
                                                    >
                                                        Show
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "dashboard.categories.edit",
                                                            category.id
                                                        )}
                                                        className="inline-flex items-center px-2 py-1 mb-2 bg-primary border border-transparent rounded-none font-semibold text-xs text-white hover:bg-opacity-7 focus:bg-gray-700 active:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <DangerButton
                                                        onClick={(e) =>
                                                            confirmCategoryDeletion(
                                                                category.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </DangerButton>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={confirmingCategoryDeletion} onClose={closeModal}>
                <form onSubmit={handleCategoryDelete} className="p-6">
                    <TextInput type="hidden" name="id" id="category_id" />
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete this category?
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Once category is deleted, all of its resources and data
                        will be permanently deleted.
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
            <Modal
                show={confirmingCategoryActivation}
                onClose={closeModalActivation}
            >
                <form onSubmit={handleCategoryActivate} className="p-6">
                    <TextInput type="hidden" name="id" id="post_id" />
                    <h2 className="text-lg font-medium text-gray-900">
                        Apakah Anda yakin mengaktifkan kembali kategori ini?
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Setelah kategori diaktifkan kembali, semua sumber daya
                        dan data akan diaktifkan kembali.
                    </p>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton
                            className="rounded-none"
                            onClick={closeModalActivation}
                        >
                            Batal
                        </SecondaryButton>
                        <PrimaryButton className="ms-3" disabled={processing}>
                            Kembalikan
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
