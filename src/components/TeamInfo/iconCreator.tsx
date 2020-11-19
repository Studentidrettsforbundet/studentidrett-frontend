import React from 'react';

export const getLinkIcon = (site: string | null): JSX.Element | null => {
    if (site === 'Facebook') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Logo Facebook</title>
                <path
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    fillRule="evenodd"
                    stroke="currentColor"
                    fill="currentColor"
                />
            </svg>
        );
    } else if (site === 'Instagram') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Logo Instagram</title>
                <path
                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                    stroke="currentColor"
                    fill="currentColor"
                />
                <path
                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                    stroke="currentColor"
                    fill="currentColor"
                />
            </svg>
        );
    } else if (site === 'Hjemmeside') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Globe</title>
                <path
                    d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                />
                <path
                    d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                />
                <path
                    d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M256 48v416M464 256H48"
                />
            </svg>
        );
    } else {
        return null;
    }
};
export const getGenderIcon = (gender: string | null): JSX.Element | null => {
    if (gender === 'M') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" fill="currentColor">
                <title>Man</title>
                <circle cx="256" cy="56" r="56" />
                <path d="M304 128h-96a64.19 64.19 0 00-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00184 300v-99.73a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8V489a23 23 0 0023 23 23 23 0 0023-23V346.34a10.24 10.24 0 019.33-10.34A10 10 0 01266 346v143a23 23 0 0023 23 23 23 0 0023-23V200.27a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00368 300V192a64.19 64.19 0 00-64-64z" />
            </svg>
        );
    } else if (gender === 'F') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" fill="currentColor">
                <title>Woman</title>
                <circle cx="255.75" cy="56" r="56" />
                <path d="M394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 00-43-32.08h-120a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0025.6-13.18l25.58-85.25 2.17-7.23a8 8 0 0115.53 2.62 7.78 7.78 0 01-.17 1.61L155.43 347.4a16 16 0 0015.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0015.33-20.6l-43.74-145.81a7.52 7.52 0 01-.16-1.59 8 8 0 0115.54-2.63l2.17 7.23 25.57 85.25A20 20 0 00382.05 303c10.27-3.44 15.69-14.71 12.58-25.1z" />
            </svg>
        );
    } else if (gender === 'MX' || gender === 'A') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" fill="currentColor">
                <title>Male Female</title>
                <path d="M426 16h-74a22 22 0 000 44h20.89l-37.1 37.09A157.68 157.68 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 000 44h28v36a22 22 0 0044 0v-36h28a22 22 0 000-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 00-14-64.92l44-44V112a22 22 0 0044 0V38a22 22 0 00-22-22zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z" />
            </svg>
        );
    } else {
        return null;
    }
};

export const getSkillIcon = (skill: string | null): JSX.Element | null => {
    if (skill === 'NONE') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-reception-0"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
        );
    } else if (skill === 'LOW') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-reception-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
        );
    } else if (skill === 'MED') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-reception-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
        );
    } else if (skill === 'HI') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-reception-3"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
        );
    } else if (skill === 'PRO') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-reception-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
            </svg>
        );
    } else {
        return null;
    }
};

export const getAvailabilityIcon = (availability: string | null): JSX.Element | null => {
    if (availability === 'OP' || availability === 'TO') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-plus-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
            </svg>
        );
    } else if (availability === 'CL' || availability === 'FU') {
        return (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-x-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                />
            </svg>
        );
    } else {
        return null;
    }
};
