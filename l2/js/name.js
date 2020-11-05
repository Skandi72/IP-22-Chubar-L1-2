import {
  renderItemsList,
  addItemToPage,
  clearInputs,
  getInputValues,
} from "./dom.js";

const submitButton = document.getElementById("add_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

let perfume = [];


const addItem = ({name, decs}) => {
  const generatedId = uuid.v1();

  const newItem= {
      id: generatedId,
      name,
      decs,
  };  
  perfume.push(newItem);
  addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const { name, description } = getInputValues();
  clearInputs();
  addItem({
    name,
    decs: description,
  });
});

findButton.addEventListener("click", () => {
  const foundPerfume = perfume.filter(perfume => perfume.name.search(findInput.value) !== -1);
  renderItemsList (foundPerfume);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(perfume);

  findInput.value ="";
})

