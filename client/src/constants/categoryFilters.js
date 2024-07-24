export const CAKE_TYPE_FILTER = {
    title: 'Type',
    values: [
        {
            title: 'Whipping',
            value: 'whipping',
        },
        {
            title: 'Topping',
            value: 'topping',
        },
    ],
};

export const CAKE_FLAVOR_FILTER = {
    title: 'Flavor',
    values: [
        {
            title: 'Strawberry',
            value: 'strawberry',
        },
        {
            title: 'Fruit',
            value: 'fruit',
        },
        {
            title: 'Chocolate',
            value: 'chocolate',
        },
        {
            title: 'Vani',
            value: 'vani',
        },
        {
            title: 'Cheese',
            value: 'cheese',
        },
        {
            title: 'Red Velvet',
            value: 'red velvet',
        },
    ],
};

export const CAKE_SIZE_FILTER = {
    title: 'Size',
    values: [
        {
            title: 'Small',
            value: 'small',
        },
        {
            title: 'Medium',
            value: 'medium',
        },
        {
            title: 'Large',
            value: 'large',
        },
    ],
};

export const CAKE_SHAPE_FILTER = {
    title: 'Shape',
    values: [
        {
            title: 'Round',
            value: 'round',
        },
        {
            title: 'Heart',
            value: 'heart',
        },
        {
            title: 'Rectangle',
            value: 'rectangle',
        },
    ],
};

export const CAKE_PRICE_FILTER = {
    title: 'Price',
    values: [
        {
            title: 'Under 100.000VND',
            value: {
                min: '0',
                max: '99999',
            },
        },
        {
            title: '100.000VND - 200.000VND',
            value: {
                min: '100000',
                max: '200000',
            },
        },
        {
            title: '200.000VND - 300.000VND',
            value: {
                min: '200000',
                max: '300000',
            },
        },
        {
            title: '300.000VND - 400.000VND',
            value: {
                min: '300000',
                max: '400000',
            },
        },
        {
            title: '400.000VND - 500.000VND',
            value: {
                min: '400000',
                max: '500000',
            },
        },
        {
            title: 'Over 500.000VND',
            value: {
                min: '500000',
                max: '999999999999999',
            },
        },
    ],
    radioButton: true,
};

export const FILTER_CONSTANTS = [
    CAKE_TYPE_FILTER,
    CAKE_FLAVOR_FILTER,
    CAKE_SIZE_FILTER,
    CAKE_SHAPE_FILTER,
    CAKE_PRICE_FILTER,
];
