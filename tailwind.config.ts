import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            screens: {
                lg: '1026px',
                '3xl': '2200px',
            },
            fontFamily: {
                header: 'var(--font-header)',
                body: 'var(--font-body)',
            },
            colors: {
                primary: {
                    0: 'var(--purple-50)',
                    1: 'var(--purple-100)',
                    2: 'var(--purple-200)',
                    3: 'var(--purple-300)',
                    4: 'var(--purple-400)',
                    5: 'var(--purple-500)',
                    6: 'var(--purple-600)',
                    7: 'var(--purple-700)',
                    8: 'var(--purple-800)',
                    9: 'var(--purple-900)',
                    10: 'var(--purple-950)',
                    hover: 'var(--purple-400)',
                },
                accent: {
                    0: 'var(--yellow-50)',
                    1: 'var(--yellow-100)',
                    2: 'var(--yellow-200)',
                    3: 'var(--yellow-300)',
                    4: 'var(--yellow-400)',
                    5: 'var(--yellow-500)',
                    6: 'var(--yellow-600)',
                    7: 'var(--yellow-700)',
                    8: 'var(--yellow-800)',
                    9: 'var(--yellow-900)',
                    10: 'var(--yellow-950)',
                },
                grey: {
                    '000': 'var(--grey-000)',
                    100: 'var(--grey-100)',
                    200: 'var(--grey-200)',
                    300: 'var(--grey-300)',
                    400: 'var(--grey-400)',
                    500: 'var(--grey-500)',
                    600: 'var(--grey-600)',
                    700: 'var(--grey-700)',
                    800: 'var(--grey-800)',
                    900: 'var(--grey-900)',
                }
            },
            textColor: {
                1: 'var(--grey-100)',
                2: 'var(--grey-300)',
                3: 'var(--grey-500)',
                invert: {
                    1: 'var(--grey-800)',
                    2: 'var(--grey-500)',
                    3: 'var(--grey-400)',
                },
                // },
                // stroke: {
                //     1: 'var(--blue-500)',
                //     invert: {
                //         1: 'var(--grey-000)',
                //     },
                // },
                // fill: {
                //     1: 'var(--grey-900)',
                //     2: 'var(--grey-700)',
                //     3: 'var(--grey-500)',
                //     invert: {
                //         1: 'var(--grey-100)',
                //         2: 'var(--grey-200)',
                //         3: 'var(--grey-300)',
                //     },
            },
            backgroundColor: {
                1: 'var(--purple-900)',
                2: 'var(--purple-800)',
                invert: {
                    1: 'var(--grey-200)',
                },
            },
            borderColor: {
                // 100: '',
                dividers: {
                    1: 'var(--purple-600)',
                    2: 'var(--grey-600)',
                },
            },
            ringColor: {
                100: 'var(--grey-100)',
                card: 'var(--primary-700)',
            },
            borderRadius: {
                'primary-desktop': '24px',
                'secondary-desktop': '8px',
                'primary-mobile': '8px',
                'secondary-mobile': '4px',
            },
            gridTemplateRows: {
                '0fr': '0fr',
                '1fr': '1fr',
            },
            maxWidth: {
                container: 'var(--max-container-width)',
                // header: '1512px',
            },
        },
    },
    plugins: [],
};
export default config;
