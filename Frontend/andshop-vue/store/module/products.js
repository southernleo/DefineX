import axios from 'axios'

const state = {
    productslist: [], 
    products: [],
    shuffleproducts: [],
    apiProducts: [], 
    loading: false,
    error: null,
    wishlist: [],
    compare: [],
    searchProduct: []
}

// getters 
const getters = {
    getcollectionProduct: (state) => {
        return collection => state.products.filter((product) => {
            return collection === product.collection
        })
    },
    getProductById: (state) => {
        return id => state.products.find((product) => {
            return product.id === +id
        })
    },
    getApiProducts: (state) => {
        return state.apiProducts
    },
    // 
    getApiProductById: (state) => (id) => {

        // 

        const numId = typeof id === 'string' ? parseInt(id) : id;

        return state.apiProducts.find(product => product.id === numId);

    },
    getApiCategories: (state) => {

        return [...new Set(state.apiProducts.map(product => product.category))];

    },
    getApiProductsByCategory: (state) => (category) => {
        return state.apiProducts.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
    },
    isLoading: (state) => {
        return state.loading
    },
    hasError: (state) => {
        return state.error
    },
    wishlistItems: (state) => {
        return state.wishlist
    },
    compareItems: (state) => {
        return state.compare
    }
}

//
const mutations = {
    SET_LOADING(state, status) {
        state.loading = status
    },
    SET_ERROR(state, error) {
        state.error = error
    },
    SET_PRODUCTS(state, products) {
        state.apiProducts = products
    },
    addToWishlist: (state, payload) => {
        // 
        const product = state.apiProducts.find(item => item.id === payload.id)
        const wishlistItems = state.wishlist.find(item => item.id === payload.id)
        if (wishlistItems) {
            // 
        } else {
            state.wishlist.push({
                ...product
            })
        }
    },
    removeWishlistItem: (state, payload) => {
        const index = state.wishlist.indexOf(payload)
        state.wishlist.splice(index, 1)
    },
    addToCompare: (state, payload) => {
        // 
        const product = state.apiProducts.find(item => item.id === payload.id)
        const compareItems = state.compare.find(item => item.id === payload.id)
        if (compareItems) {
            // Already in compare
        } else {
            state.compare.push({
                ...product
            })
        }
    },
    removeCompareItem: (state, payload) => {
        const index = state.compare.indexOf(payload)
        state.compare.splice(index, 1)
    },
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchProduct = []
        if (payload.length) {
            // 
            state.apiProducts.filter((product) => {
                if (product.title.toLowerCase().includes(payload)) {
                    state.searchProduct.push(product)
                }
            })
        }
    },
    shuffleProduct: (state, payload) => {
        state.shuffleproducts = payload
    },
    getallProduct: (state, payload) => {
        // 
        state.shuffleproducts = state.apiProducts
    }
}

// actions 
const actions = {
    async fetchProducts({ commit }) {
        try {
            commit("SET_LOADING", true);
            
            const response = await axios.get("https://localhost:7189/api/products/");
            
            if (response.data.isSuccess) {
                const formattedProducts = response.data.result.map(item => ({
                    id: item.productId,
                    title: item.name,
                    price: item.price,
                    description: item.description,
                    // 
                    images: [
                        { src: item.imageUrl, image_id: 1 },
                        { src: item.imageUrl, image_id: 2 } // Using same image for hover effect
                    ],
                    category: item.categoryName,
                    type: "fashion",
                    collection: [item.categoryName],
                    new: true,
                    sale: false,
                    discount: 0,
                    stock: 10,
                    rating: 5,
                    // 
                    variants: [
                        {
                            color: "black",
                            image_id: 1,
                            size: "M"
                        },
                        {
                            color: "gray",
                            image_id: 2,
                            size: "L"
                        }
                    ]
                }));
                
                commit("SET_PRODUCTS", formattedProducts);
                
                // 
                state.products = formattedProducts;
                state.productslist = formattedProducts;
                state.shuffleproducts = formattedProducts;
            } else {
                throw new Error(response.data.displayMessage || "Ürünler alınamadı");
            }
        } catch (error) {
            console.error("Ürünleri getirirken hata oluştu:", error);
            commit("SET_ERROR", error.message);
        } finally {
            commit("SET_LOADING", false);
        }
    },
    
    addToWishlist: (context, payload) => {
        context.commit('addToWishlist', payload)
    },
    removeWishlistItem: (context, payload) => {
        context.commit('removeWishlistItem', payload)
    },
    addToCompare: (context, payload) => {
        context.commit('addToCompare', payload)
    },
    removeCompareItem: (context, payload) => {
        context.commit('removeCompareItem', payload)
    },
    searchProduct: (context, payload) => {
        context.commit('searchProduct', payload)
    },
    shuffleProduct: (context, payload) => {
        context.commit('shuffleProduct', payload)
    },
    getallProduct: (context) => {
        context.commit('getallProduct')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}