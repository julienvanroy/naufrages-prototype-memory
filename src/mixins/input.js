export default {
    props: {
        id: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
}
