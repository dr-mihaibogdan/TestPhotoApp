// import {PhotoDataResponse} from '../models/api/PhotoData';

// const fetchCuratedPhotos = async (page: number) => {
//   fetch(`https://api.pexels.com/v1/curated?page=${page}`).then(res => {
//     return res.json() as Promise<PhotoDataResponse>;
//   });
// };

// export default {fetchCuratedPhotos};

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PhotoDataResponse} from '../models/api/PhotoData';

const TAG_PHOTOS = 'Photos';

export const photoApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/v1/',
    prepareHeaders: headers => {
      headers.set(
        'Authorization',
        'tLEnMmQI0oBrzt0NvDZLMCB362RwiZEwaPALg8SGyCI2oZ6HuyGn5z1R',
      );

      return headers;
    },
  }),
  tagTypes: [TAG_PHOTOS as string],

  endpoints: builder => ({
    getCuratedPhotos: builder.query<PhotoDataResponse, number>({
      query: page => `curated?page=${page}`,
      providesTags: result =>
        result
          ? [
              ...result.photos.map(({id}) => ({
                type: TAG_PHOTOS as string,
                id,
              })),
              {type: TAG_PHOTOS as string, id: 'PARTIAL-LIST'},
            ]
          : [{type: TAG_PHOTOS as string, id: 'PARTIAL-LIST'}],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetCuratedPhotosQuery} = photoApi;
