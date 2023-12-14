/* eslint-disable quotes */
export const state = () => ({
  product: [],
  imageSite: []
})

export const getters = {
  getProduct (state) {
    return state.product
  },
  getImageSite (state) {
    return state.imageSite
  }
}

export const mutations = {
  SET_PRODUCT (state, product) {
    state.product = product
  },
  SET_IMAGESITE (state, imageSite) {
    state.imageSite = imageSite
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios }) {
    const product = await $axios.$get('https://uul9kym0.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "product"]{title, description,"imageId":image{asset,alt}, slug, new, price, stripeUrl}')

    const imageSite = await $axios.$get('https://uul9kym0.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "imageSite"]{name,"imageId":image{asset,alt},titre,text}')

    await dispatch('setProduct', product.result)
    await dispatch('setImageSite', imageSite.result)
  },
  setProduct ({ commit }, product) {
    commit('SET_PRODUCT', product)
  },
  setImageSite ({ commit }, imageSite) {
    commit('SET_IMAGESITE', imageSite)
  }
}
