// Thêm vào apiStory để test api


const axios = require('axios');

// const baseURL = 'https://webnovelapi.azurewebsites.net';
const baseURL = 'http://localhost:5125/api/novel/';
const path = 'novel/';

// Tạo một hàm async để gửi yêu cầu GET
export async function getNovelList() {
    try {
        const config = {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            withCredentials:false,
        };
        // Sử dụng Axios để gửi yêu cầu GET đến baseURL/Novel
        const response = await axios.get(baseURL,config);

        // Kiểm tra xem yêu cầu có thành công không
        if (response.status === 200) {
            // Dữ liệu trả về sẽ nằm trong response.data
            const novelList = response.data;
            console.log('Danh sách tiểu thuyết: ', novelList);
            return novelList;
        } else {
            console.error('Yêu cầu không thành công.');
        }
    } catch (error) {
        console.error('Lỗi:', error.message);
    }
}
