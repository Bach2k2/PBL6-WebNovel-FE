import axios from "axios";
import getData from "./getData";

export const createChapter = async (params) => {
    const url = "/novels/novel/chuong/create";
    try {
        const response = await axios.post(url, params);
        return getData(response);
    } catch (error) {
        // Handle any errors here
        console.error("Error creating chapter:", error);
        throw error; // You can rethrow the error or handle it as needed
    }
};

export const updateChapter = async (params) => {
    const url = "/novels/novel/chuong/edit";
    try {
        const response = await axios.put(url, params);
        return getData(response);
    } catch (error) {
        // Handle any errors here
        console.error("Error updating chapter:", error);
        throw error; // You can rethrow the error or handle it as needed
    }
};

export const deleteChapter = async (params) => {
    const url = "/novels/novel/chuong";
    try {
        const response = await axios.delete(url, { params });
        return getData(response);
    } catch (error) {
        // Handle any errors here
        console.error("Error deleting chapter:", error);
        throw error; // You can rethrow the error or handle it as needed
    }
};
