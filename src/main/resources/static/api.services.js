const URL_BASE = "http://localhost:8080/api/products";

export async function getAllItemsFromAPI() {
  try {
    const response = await fetch(URL_BASE);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}

export async function postItemToAPI(item) {
  try {
    const response = await fetch(URL_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
}

export async function deleteItemFromAPI(id) {
  try {
    const response = await fetch(`${URL_BASE}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
}

export async function putItemToAPI(id, item) {
  try {
    const response = await fetch(`${URL_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
  }
}

