import { SET_FILTER_DATE } from '../constants'

export function setFilterDate(dateRange) {
    return {
        type: SET_FILTER_DATE,
        payload: { dateRange }
    }
}