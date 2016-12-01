import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { setFilterDate } from '../AC/filters'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (e, day) => {
        const { setFilterDate, dateRange } = this.props
        setFilterDate(DateUtils.addDayToRange(day, dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.props.dateRange) }
                    onDayClick={ this.handleDayClick }
                />
                <div>{selectedRange}</div>
            </div>
        );
    }

}

export default connect(
    (state) => ({dateRange: state.filters.dateRange}),
    {setFilterDate}
)(DateRange)