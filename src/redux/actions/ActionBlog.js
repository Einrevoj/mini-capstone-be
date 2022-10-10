import { get } from '../../utilities/https';

export const getAllBlogs = () => {
    const url = '/blog/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIST',
                payload: response
            })
            }) .catch((error) => {
            reject(error);
        })
    })
}