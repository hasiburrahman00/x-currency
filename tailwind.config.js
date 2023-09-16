/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '575px',
                md: '768px',
                lg: '991px',
                xl: '1280px'
            }
        },
        extend: {
            backgroundColor: {
                'brand': 'var(--Brand, #517DFC)',
            },
            colors: {
                primary: '#2E60E1',
                secondary: '#575757'
            },
            boxShadow: {
                'btn': '0px 1px 0px 0px #092E97',
                'community': '0px 1px 0px 0px #092E97',
                'screenshot': '0px 16.38722px 38.23685px -3.32865px rgba(40, 45, 62, 0.16)',
                'card': '8px 24px 40px 8px rgba(0, 0, 0, 0.08)',
                'core-value': '0px 8px 24px 0px rgba(0, 0, 0, 0.08)',
                'employee': '0px 20px 40px -4px rgba(145, 158, 171, 0.12)',

            },
            dropShadow: {
                'counter': '0px 8px 24px rgba(0, 0, 0, 0.08)'
            },
            backgroundImage: {
                ['banner']: 'url(../src/images/background_img.png)',
                ['btn-bg']: ' linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
                ['banner-bg']: 'url(../src/images/background-img.png)',
                ['community-bgImg']: 'url(../src/images/doatkolom-community.png)',
                ['community-bgcolor']: 'linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
                ['text-background']: 'linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)'
            },
            fontFamily: {
                'lato': ['Lato']
            }

        },
    },
    plugins: [],
}

