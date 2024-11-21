import {
  getAllItemsFromAPI,
  postItemToAPI,
  deleteItemFromAPI,
  putItemToAPI,
} from "./api.services.js";

let items = [];
const shopListDOM = document.getElementById("listId");
const inputIdDOM = document.getElementById("inputId");
const addBtnId = document.getElementById("addBtnId");

async function printList() {
  try {
    console.log("Obteniendo lista de productos...");
    items = await getAllItemsFromAPI();
    console.log("Productos obtenidos:", items);
    shopListDOM.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      shopListDOM.innerHTML += `<li>
        <span>
          <input 
            type="checkbox" 
            onchange="checkedItem(${items[i].id}, ${i})" 
            ${items[i].isBought ? "checked" : ""} 
          >
        </span>
        <span class='${items[i].isBought ? "textSpan" : ""}'>${items[i].nameProduct}</span>
        <span onclick="deleteItemFromList(${items[i].id})" class="item-delete-btn">x</span>
      </li>`;
    }
  } catch (error) {
    console.error("Error al cargar la lista:", error);
    alert("Hubo un problema al cargar los productos.");
  }
}

async function addItemToList() {
  const newItem = inputIdDOM.value.trim();
  inputIdDOM.value = "";
  if (!newItem) {
    alert("Por favor, escribe un producto.");
    return;
  }
  if (newItem.length > 50) {
    alert("El producto no puede tener más de 50 caracteres.");
    return;
  }
  try {
    const newItemObject = {
      nameProduct: textFormat(newItem),
      isBought: false,
      createdAt: new Date().toISOString(),
    };
    console.log("Añadiendo producto:", newItemObject);
    await postItemToAPI(newItemObject);
    await printList();
  } catch (error) {
    console.error("Error al añadir producto:", error);
    alert("Hubo un problema al añadir el producto.");
  }
}

async function deleteItemFromList(id) {
  try {
    console.log("Eliminando producto con ID:", id);
    await deleteItemFromAPI(id);
    await printList();
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    alert("Hubo un problema al eliminar el producto.");
  }
}

async function checkedItem(id, index) {
  try {
    items[index].isBought = !items[index].isBought;
    const updatedItem = { isBought: items[index].isBought };
    console.log("Actualizando producto con ID:", id, "Nuevo estado:", updatedItem);
    await putItemToAPI(id, updatedItem);
    await printList();
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    alert("Hubo un problema al actualizar el producto.");
  }
}

function textFormat(text) {
  return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
}

async function main() {
  addBtnId.addEventListener("click", addItemToList);
  await printList();
}

await main();

// Hacer funciones globales para uso en el DOM
window.addItemToList = addItemToList;
window.deleteItemFromList = deleteItemFromList;
window.checkedItem = checkedItem;
