let allGifts = []
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  // console.table(gifts)

  // change db, the DOM, and the variables

  const giftList = document.querySelector('.gift-list');
  const newGiftForm = document.querySelector('#new-gift-form');
  const giftNameInput = document.querySelector('#gift-name-input');
  const giftImageInput = document.querySelector('#gift-image-input');
  const giftFormButton = document.querySelector('#gift-form-button');
  const filterInput = document.querySelector('#filter-input')

  giftList.innerHTML = renderAllGifts(gifts) // helper fn

  filterInput.addEventListener("change", (e) => {
    e.preventDefault()
    const filteredGifts = gifts.filter( (gift) => {
      return gift.name.includes(e.target.value)
    })
    // console.log(filteredGifts)
    giftList.innerHTML = renderAllGifts(filteredGifts)
  })

  newGiftForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newGiftName = giftNameInput.value
    const newGiftImage = giftImageInput.value

    fetch("file:///Users/danggree/Development/lab/giftr-dom-crud-ajax-nyc-web-111918/src/giftData.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: newGiftName,
        image: newGiftImage
      })
    })
    .then(resp => resp.json())
    .then(newGift => {
      allGifts.push(newGift)
      giftList.innerHTML += `
      <li data-id="${newGift.id}">${newGift.name}</li>
      <img data-id="${newGift.id}" src="${newGift.image}">
      <button data-id="${newGift.id} id="edit">Edit</button>
      <button data-id="${newGift.id} id="delete">Delete</button>
      `
    })
  })

});

  // function fetchGifts() {
  //   fetch("http://localhost:3000/gifts")
  //   .then( (resp) => {
  //     return resp.json()
  //   })
  //   .then( (data) => {
  //     allGifts = data
  //     renderAllGifts(data)
  //   })
  // }
  //
  // function renderAllGifts() {
  //   gifts.forEach( (gift) => {
  //     giftList.innerHTML += `
  //       <li>${gift.name}</li>
  //       <img src="${gift.image}">
  //       <button data-action="edit">Edit</button>
  //       <button data-action="delete">Delete</button>
  //     `
  //   })
  // }


  // function showAllGifts(gifts) {
  //   gifts.forEach( (gift) => {
  //     giftList.innerHTML += `
  //       <li>${gift.name}</li>
  //       <img src="${gift.image}">
  //       <button data-action="edit">Edit</button>
  //       <button data-action="delete">Delete</button>
  //       `
  //   });
  // }

    // nested event handlers XXX
