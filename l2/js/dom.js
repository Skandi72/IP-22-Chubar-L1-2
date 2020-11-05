const nameInput = document.getElementById("name_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer= document.getElementById("items_container");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({id, name, decs}) => `
<li id="${getItemId(id)}" class="item-card" >
    <img src="svg/parfum.jpg" class="items_container__image" alt="card">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${decs}</p>
    </div>
</li>`;  


export const getInputValues = () => {
    return {
        name:nameInput.value,
        description:descriptionInput.value,
    };
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    for ( const item of items) {
        addItemToPage(item);
    }
};
export const clearInputs = () =>{
    nameInput.value="";

    descriptionInput.value="";
};

export  const addItemToPage = ({id, name, decs}) =>{
    itemsContainer.insertAdjacentHTML(
        "afterbegin" ,
        itemTemplate({ id, name, decs})
    );
};