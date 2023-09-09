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
            colors: {
                primary: '#2E60E1',
                secondary: '#575757'
            },
            boxShadow: {
                'btn': '0px 1px 0px 0px #092E97',
                'community': '0px 1px 0px 0px #092E97',
            },
            dropShadow: {
                'counter': '0px 8px 24px rgba(0, 0, 0, 0.08)'
            },
            backgroundImage: {
                ['btn-bg']: ' linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
                ['banner-bg']: 'url(../src/images/background-img.png)',
                ['community-bgImg']: 'url(../src/images/doatkolom-community.png)',
                ['community-bgcolor']: 'linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)'
            },
            fontFamily: {
                'lato': ['Lato']
            }

        },
    },
    plugins: [],
}

