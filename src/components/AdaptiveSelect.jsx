import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import { isMobile } from 'react-device-detect';

const AdaptiveSelect = (props) => {
  const { options, value, onChange } = props;
  if (!options || !value) return null;

  return isMobile ? (
    <NativeSelect value={value} onChange={e => onChange(e.target.value)}>
      {Object.keys(options).map(key => (
        <option key={key} value={key}>
          {options[key]}
        </option>
      ))}
    </NativeSelect>
  ) : (
    <Select value={value} onChange={e => onChange(e.target.value)}>
      {Object.keys(options).map(key => (
        <MenuItem key={key} value={key}>
          {options[key]}
        </MenuItem>
      ))}
    </Select>
  );
};

export default AdaptiveSelect;
