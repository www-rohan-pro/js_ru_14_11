import { SET_FILTER_DATE } from '../constants'

const defaultState = {
    dateRange: {
        from: null,
        to: null
    }
}

export default (filtersState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_FILTER_DATE:
            return {
                ...filtersState,
                dateRange: payload.dateRange
            }
    }

    return filtersState
}