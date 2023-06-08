import { ref, watchEffect, computed } from 'vue'
import { defineStore } from 'pinia'

export const getDataProduct = defineStore('getDataProduct', () => {
  //calling all items
  const listItems = ref([])
  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
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

  // in cart items 
  let filterd = computed(() => {
    return listItems.value.filter((item) => {
      if (item.inCart) {
        return item
      }
    })
  })


  // subtotal and item count
  let Subtotal = ref(0)
  let itemCount = ref(0)
  watchEffect(() => {
    Subtotal.value = 0
    itemCount.value = 0
    listItems.value.forEach((item) => {
      if (item.inCart) {
        Subtotal.value = Subtotal.value + item.price * item.qty
        itemCount.value = itemCount.value + 1
      }
    })
  })

  return { listItems, Subtotal, filterd, itemCount }
})
