const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: [
                { id: 2236, footsize: 'S'},
                { id: 2237, footsize: 'M'},
                { id: 2238, footsize: 'L'},
                { id: 2239, footsize: 'XL'},
            ]
        }
    }
})