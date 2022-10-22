import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
    // .then((res) => {
    //     // console.log(res.data.data);
    //     setSearchResults(res.data);
    //     setLoading(false);
    // })
    // .catch(() => {
    //     setLoading(false);
    // });
};
