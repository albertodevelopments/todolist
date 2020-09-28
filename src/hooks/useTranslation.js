import { useContext } from 'react'

import AppContext from 'context/AppContext'

export const useTranslation = () => {
    const { translationsArray } = useContext(AppContext)

    const getLabel = originalLabel => {
        const translationObj = translationsArray.find(
            labelObject => labelObject.label === originalLabel
        )
        return translationObj.translation
    }

    return { translationsArray, getLabel }
}
