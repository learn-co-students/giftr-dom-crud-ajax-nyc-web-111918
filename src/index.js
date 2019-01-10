document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)
  const giftList=document.querySelector('.gift-list');
  renderGifts(gifts)
  giftList.addEventListener('click', function(event){
    if (event.target.dataset.type==="edit"){
      // giftid=event.target.dataset.giftid;
      // gift=findGiftById(giftid)
      // createEditForm()
    }
  });
})

function findGiftById(id){
  return gifts.find(function(gift){
    return gift.id==id;
  })
}

function renderGifts(list){
  const giftList=document.querySelector('.gift-list');
  if (gifts.length>0){
    giftList.innerHTML="";
  }
  list.forEach(function(gift){
      const giftElement = document.createElement("li");
      const giftName = document.createTextNode(gift.name);
      const giftImg = document.createElement("img");
      const editButton = document.createElement("button");
      editButton.dataset.giftid=gift.id
      editButton.dataset.type="edit"
      const editButtonText = document.createTextNode("Edit")
      editButton.appendChild(editButtonText);
      giftImg.className="gift-image";
      giftImg.src=gift.image;
      giftElement.appendChild(giftName);
      giftElement.appendChild(giftImg);
      giftElement.appendChild(editButton)
      giftList.appendChild(giftElement);
    }
  )
}

function createEditForm(gift){
  const form=document.createElement("form");
  form.className="ui form"
  const nameInput=document.createElement("input")
  nameInput.value=gift.name;
  const imgInput=document.createElement("input")
  imgInput.value=gift.image;
  const nameInputLabel=document.createElement("label");
  const nameInputLabelText=document.createTextNode("Gift Name:")
  nameInputLabel.appendChild(nameInputLabelText)
  const imgInputLabel=document.createElement("label");
  const imgInputLabelText=document.createTextNode("Gift Image:")
  imgInputLabel.appendChild(imgInputLabelText)
  form.appendChild(nameInputLabel)
  form.appendChild(nameInput)
  form.appendChild(imgInputLabel)
  form.appendChild(imgInput)
  formDiv=document.getElementById('form-div')
  formDiv.appendChild(form)
}
