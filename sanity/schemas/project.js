export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },
    ],
}
