const left = ({to = '/login', children = 'Proceed to log in', blueBtn = true, ...rest}) => {
    return {to, children, blueBtn, ...rest};
};

const right = ({to = '/', children = 'Continue shopping', ...rest}) => {
    return {to, children, ...rest};
};

const createLinks = (leftArgs = {}, rightArgs = {}) => {
    return [
        left(leftArgs),
        right(rightArgs)
    ];
}

export const signupModalLinks = createLinks();

export const  loginErrorLinks = createLinks(
    {
        children: 'Try again'
    },
    {
        to: '/signup',
        children: 'Sign up'
    }
);

export const cartModalLinks = createLinks(
    {
        to: '/cart',
        children: 'Back to cart'
    }
);

export const logoutModalLinks = createLinks(
    {
        to: '#',
        children: 'Cancel'
    },
    {
        children: 'Proceed to log out',
        onClick: true
    }
);

export const productAddedLinks = createLinks(
    {
        to: '/cart',
        children: 'Go to cart'
    }
);