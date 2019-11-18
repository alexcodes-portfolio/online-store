const commonLinks = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: [
                {
                    to: '/category/Skating',
                    title: 'Skating'
                },
                {
                    to: '/category/Classic',
                    title: 'Classic'
                }
        ],
        title: 'Categories'
    }
];

export const loggedInLinks = [
    ...commonLinks,
    {
        to: [
            {
                title: 'Log out',
                to: '#'
            }
        ]
    }
];

export const loggedOutLinks = [
    ...commonLinks,
    {
        to: '/login',
        title: 'Log in'
    },
    {
        to: '/signup',
        title: 'Sign up'
    }
];
