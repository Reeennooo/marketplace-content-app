import {Input, type InputProps} from './Input';

const monthNames = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const formatDateToText = (value: string) => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)} ${monthNames[monthIndex]} ${year}`;
};

export const DateInput = ({ value, onChange, ...rest }: InputProps) => {
  const formatted = value ? formatDateToText(value) : '';

  return (
    <div className="relative w-full">
      {/* Прозрачный date input поверх, получает фокус */}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="date-input__hidden-input"
      />

      {/* Отображение форматированной даты */}
      <Input
        {...rest}
        type="date"
        value={formatted}
        onChange={onChange}
        className="pointer-events-none "
      />
    </div>
  );
};
