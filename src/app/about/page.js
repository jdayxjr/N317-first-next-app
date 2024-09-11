"use client";
import Image from "next/image";
import homeStyles from '@/app/page.module.css';

export default function about() {
    return (
        <main>
            <nav className={homeStyles.homeNav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <h1>Jay Dawson</h1>
            <h3>interests</h3>
            <ul>
                <li>Coding</li>
                <li>Gaming</li>
                <li>Gym</li>
                <li>NFL</li>
                <li>Hip-hop</li>
            </ul>
        </main>

    );
}