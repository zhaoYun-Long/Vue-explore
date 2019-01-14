const _products = [
  {'id': 1, 'title': 'ipad 4 mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': '宏碁掠夺者', 'price': 8400.01, 'inventory': 10},
  {'id': 3, 'title': '战神999', 'price': 6500.01, 'inventory': 5}
]

export const getAllProducts = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(_products)
    }, 1500)
  })
}

export const by = (products, cb, failCb) => {
  setTimeout( () => {
    Math.random() > 0.5 ? cb() : failCb()
  })
}