function  renderAllGifts(giftArray) {
  return giftArray.map( (gift) => {
    return `
    <li data-id="${gift.id}">${gift.name}</li>
    <img data-id="${gift.id}" src="${gift.image}">
    <button data-id="${gift.id} id="edit">Edit</button>
    <button data-id="${gift.id} id="delete">Delete</button>
    `
  }).join('')
}
