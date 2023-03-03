export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string',
        },
        {
            name: 'companyImage',
            title: 'Company Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'company',
            title: 'Company',
            type: 'text',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date',
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
}
