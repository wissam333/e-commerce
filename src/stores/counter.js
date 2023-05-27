import { ref } from 'vue'
import { defineStore } from 'pinia'

export const getDataProduct = defineStore('getDataProduct', () => {
  const listItems = ref([])
  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=15')
    const finalRes = await res.json()

    listItems.value = finalRes.map((product) => {
      return {
        ...product,
        qty: 0,
        inCart: false,
        like: false
      }
    })
  }
  getData()

  return { listItems }
})
