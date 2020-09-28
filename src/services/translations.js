export const getTranslations = language => {
    return fetch('data/translations.json')
        .then(res => res.json())
        .then(response => {
            const result = response.labels.map(label => {
                const obj = {}
                obj.label = label.label
                obj.translation = label[language]
                return obj
            })
            return result
        })
        .catch(error => console.log(error))
}
