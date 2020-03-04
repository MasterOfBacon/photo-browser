import React from 'react'
import '../styles/App.css'
import Link from 'next/link'

function Navigation() {
    return (
        <nav>
            <ul className="navigation">
                <Link href="/" as={`/`}>
                    <li>
                        <div className="link-class">
                            <a>Etusivu</a>
                        </div>
                    </li>
                </Link>
                <Link href="/images" as={`/images`}>
                    <li>
                        <div className="link-class">
                            <a>Kuvagalleria</a>
                        </div>
                    </li>
                </Link>
                <Link href="/albums" as={`/albums`}>
                    <li>
                        <div className="link-class">
                            <a>Albumit</a>
                        </div>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
