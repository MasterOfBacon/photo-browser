import React from 'react'
import '../styles/App.css'
import Link from 'next/link'

function Navigation() {
    return (
        <nav>
            <ul className="navigation">
                <Link href="/" as={`/`}>
                    <li>
                        <a>Etusivu</a>
                    </li>
                </Link>
                <Link href="/images" as={`/images`}>
                    <li>
                        <a>Kuvagalleria</a>
                    </li>
                </Link>
                <Link href="/albums" as={`/albums`}>
                    <li>
                        <a>Albumit</a>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
