export const maxwords = {
    handler: (name, value, params) => {
        const matches = value.match(/\S+/g)
        const count = matches ? matches.length : 0
        return count <= parseInt(params[0], 10)
    },
    message: "Your text can't have more than 500 words"
}
