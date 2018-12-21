import React from 'react';
import DatePicker from 'react-datepicker';
import TextField from '@material-ui/core/TextField';
import { isMobile } from 'react-device-detect';
import 'react-datepicker/dist/react-datepicker.css';

const AdaptiveDatePicker = (props) => {
  const {
    value,
    minDate,
    maxDate,
    onChange,
  } = props;

  function dateToYMD(date) {
    if (!date) return '';
    if (Object.prototype.toString.call(date) === '[object Date]') return date.toISOString().substring(0, 10);
    return date;
  }

  return isMobile ? (
    <TextField
      type="date"
      value={dateToYMD(value)}
      onChange={e => onChange(e.target.value)}
      min={dateToYMD(minDate)}
      max={dateToYMD(maxDate)}
      fullWidth
      InputProps={{
        readOnly: true,
        disableUnderline: true,
      }}
    />
  ) : (
    <DatePicker
      selected={value}
      onChange={onChange}
      minDate={minDate}
      maxDate={maxDate}
      dateFormat="dd/MM/yyyy"
      popperClassName="calendar-popper"
      popperModifiers={{
        preventOverflow: {
          enabled: true,
          escapeWithReference: true,
          boundariesElement: 'viewport',
        },
      }}
      style={{ background: 'transparent' }}
    />
  );
};

export default AdaptiveDatePicker;
