import sanitClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanitClient({
    projectId: 'ejovqg57',
    dataset: 'production',
    apiVersion: '2023-01-05',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);