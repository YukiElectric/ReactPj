import Http from "./Http";

export const getProducts = (config) => Http.get("/products", config);

export const getCategories = (config) => Http.get("/categories", config);

export const getCategory = (id, config) => Http.get(`/categories/${id}`, config);

export const getProdctCategory = (id, config) => Http.get(`/categories/${id}/products`, config);