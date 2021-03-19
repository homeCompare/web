import moment from 'moment';

const halfYearFromNowString = moment().add(6, 'months').format('yyyy-MM-DD');

export default [{
  name: 'city',
  label: 'city',
  placeholder: 'New york',
  type: 'text',
  validation: {
    required: true,
  },
  initialValue: 'New York',
}, {
  name: 'street',
  label: 'street',
  placeholder: 'Punk avenu',
  type: 'text',
  validation: {
    required: true,
  },
  initialValue: 'Punk avenu',
}, {
  name: 'blockNumber',
  label: 'block_number',
  placeholder: '4',
  type: 'number',
  validation: {
    numberOnly: true,
  },
  initialValue: '7',
}, {
  name: 'houseNumber',
  label: 'house_number',
  placeholder: '1',
  type: 'number',
  validation: {
    required: true,
    numberOnly: true,
  },
  initialValue: '1',
}, {
  name: 'dropImage',
  label: 'dropzone label',
  type: 'dropZone',
  placeholder: 'drag_and_drop_area',
}, {
  name: 'areaRate',
  label: 'area_rate',
  type: 'slider',
  min: 0,
  max: 10,
  validation: {
    numberOnly: true,
  },
  initialValue: 5,
}, {
  name: 'personalRate',
  label: 'general_personal_rate',
  type: 'slider',
  min: 0,
  max: 10,
  validation: {
    numberOnly: true,
  },
  initialValue: 5,
}, {
  name: 'price',
  label: 'price',
  type: 'number',
  placeholder: '1350000',
  initialValue: '1300000',
}, {
  name: 'propertyTax',
  label: 'property_tax',
  type: 'number',
  placeholder: '4000 yearly',
  initialValue: '4000',
}, {
  name: 'buildingTax',
  label: 'building_tax',
  type: 'number',
  placeholder: '50 monthly',
  initialValue: '50',
}, {
  name: 'numberOfRooms',
  label: 'number_of_rooms',
  type: 'number',
  placeholder: '2',
  initialValue: '3',
}, {
  name: 'floor',
  label: 'floor',
  type: 'text',
  placeholder: '3 out of 3',
  initialValue: '3 out of 3',
}, {
  name: 'squareMeter',
  label: 'square_meter',
  type: 'number',
  placeholder: '80',
  initialValue: '80',
}, {
  name: 'freeText',
  label: 'free_text',
  type: 'text',
  placeholder: 'comments and notes',
}, {
  name: 'entryDate',
  label: 'entry_date',
  type: 'date',
  initialValue: halfYearFromNowString,
}, {
  name: 'hasBlacony',
  label: 'has_balcony',
  type: 'switch',
  initialValue: false,
}, {
  name: 'hasGarage',
  label: 'has_garage',
  type: 'switch',
  initialValue: false,
}, {
  name: 'isRenovated',
  label: 'is_renovated',
  type: 'switch',
  initialValue: false,
}, {
  name: 'hasAirConditioner',
  label: 'has_ac',
  type: 'switch',
  initialValue: true,
}];
