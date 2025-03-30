const state = {

  cart: []
}
// getters
const getters = {
  cartItems: (state) => {
    return state.cart
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce( (total, product) => {
      return total + ( (product.price - ( product.price * product.discount / 100) ) * product.quantity)
      }, 0 )
  }
}
// actions
const actions = {
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
      context.commit('removeCartItem', payload)
  }
}

// mutations
const mutations = {
    addToCart: (state, payload) => {
      // API'den gelen ürünleri doğrudan kullan
      const cartItems = state.cart.find(item => 
        item.id === payload.id &&
        item.selectedColor === payload.selectedColor &&
        item.selectedSize === payload.selectedSize
      );
      
      const qty = payload.quantity ? payload.quantity : 1
      
      if (cartItems) {
        cartItems.quantity = qty
      } else {
        // Artık products.data'dan aramak yerine, direkt ürünü sepete ekliyoruz
        state.cart.push({
          ...payload,
          quantity: qty
        })
      }
    },
    
  updateCartQuantity: (state, payload) => {
    // Calculate Product Stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {

        }
        return true
      }
    })
  },
  removeCartItem: (state, payload) => {
      const index = state.cart.indexOf(payload)
      state.cart.splice(index, 1)
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
