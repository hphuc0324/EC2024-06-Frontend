export const GENDERS = [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' },
    { value: 'OTHERS', label: 'Others' },
];

export const USER_MENU = [
    {
        labeL: 'Account',
        to: '/account',
    },
];

export const GUEST_MENU = [
    {
        label: 'Log In',
        to: '/auth/login',
    },
    {
        label: 'Register',
        to: '/auth/register',
    },
];

export const CAKE_CATEGORIES = [
    {
        label: 'Whipping',
        to: '/category/?type=whipping',
    },
    {
        label: 'Topping',
        to: '/category/?type=topping',
    },
    {
        label: 'Sale',
        to: '/category/?sale=true',
    },
    {
        label: 'All',
        to: '/category',
    },
];
