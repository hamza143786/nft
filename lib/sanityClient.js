import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'cfqsfrit',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skeaP8n5mLhS2nTDnuV09bQXJsFxjEI7nzKyQZ2RNFUVLvCTxMnjzRI4s1tmR2SlSbhGqRfxfdFjB8UBZLAqTvDkTmaf4OTOcoskruyhmQQOGr7ivOLsHr3WHxNVSQinrBX0c3odd9YSrM0W5j9d21MVXV7MO2Pf13FY9FFi4ejzrw56BWk7',
    useCdn: false,
})