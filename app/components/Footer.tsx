import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full p-6 flex justify-center items-center text-center text-zinc-600">
            <Link
                href="https://github.com/SuperMoooo"
                target="_blank"
                className="hover:underline"
            >
                Github
            </Link>
        </footer>
    );
}
