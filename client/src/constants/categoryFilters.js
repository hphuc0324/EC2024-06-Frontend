export const CAKE_TYPE_FILTER = {
    filterTitle: 'Type',
    filterValues: [
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
    filterTitle: 'Flavor',
    filterValues: [
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
    filterTitle: 'Size',
    filterValues: [
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
    filterTitle: 'Shape',
    filterValues: [
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
    filterTitle: 'Price',
    filterValues: [
        {
            title: 'Under 100.000VND',
            value: {
                min: 0,
                max: 99999,
            },
        },
        {
            title: '100.000VND - 200.000VND',
            value: {
                min: 100000,
                max: 200000,
            },
        },
        {
            title: '200.000VND - 300.000VND',
            value: {
                min: 200000,
                max: 300000,
            },
        },
        {
            title: '300.000VND - 400.000VND',
            value: {
                min: 300000,
                max: 400000,
            },
        },
        {
            title: '400.000VND - 500.000VND',
            value: {
                min: 400000,
                max: 500000,
            },
        },
        {
            title: 'Over 500.000VND',
            value: {
                min: 500000,
            },
        },
    ],
};
