import { Inertia } from '@inertiajs/inertia';
// @ts-ignore
import { Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import JetBanner from '@/Jetstream/Banner';
import JetNavbar from '@/Jetstream/Navbar';


interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function AppLayout({
    title,
    renderHeader,
    children,
}: PropsWithChildren<Props>) {

    return (
        <div>
            <Head title={title} />

            <JetBanner />

            <div className="min-h-screen bg-gray-100">
                {/* <!-- Navbar --> */}
                <JetNavbar />

                {/* <!-- Page Heading --> */}
                {renderHeader ? (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {renderHeader()}
                        </div>
                    </header>
                ) : null}

                {/* <!-- Page Content --> */}
                <main>{children}</main>
            </div>
        </div>
    );
}
