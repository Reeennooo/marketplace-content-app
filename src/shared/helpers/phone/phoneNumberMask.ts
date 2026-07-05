/**
 * Обработчик изменения номера телефона с валидацией и форматированием на лету
 * @param {function} setNumber - Функция для установки значения номера
 * @returns {function} - Функция-обработчик для события изменения
 */
export const handlePhoneNumberChange = (setNumber: (value: string) => void) => {
  return (value: string) => {
    // Разрешённые символы: цифры, +, пробелы, скобки и дефисы
    const allowedRegex = /^[0-9+\s()-]*$/;
    if (!allowedRegex.test(value) && value !== '') return;

    // Только цифры
    let digitsOnly = value.replace(/\D/g, '');

    // Если пусто — очищаем
    if (digitsOnly === '') {
      setNumber('');
      return;
    }

    // Заменяем 8 на 7 для РФ
    if (digitsOnly.startsWith('8')) {
      digitsOnly = '7' + digitsOnly.slice(1);
    }

    // Форматируем
    const formatted = formatPhoneNumber(digitsOnly);
    setNumber(formatted);
  };
};

/**
 * Форматирование номера телефона в зависимости от кода страны
 * @param {string} raw
 * @returns {string}
 */
export const formatPhoneNumber = (raw: string) => {
  const digits = raw.replace(/\D/g, '');

  const rules = [
    { code: '7', format: formatRU, maxLength: 11 },
    { code: '375', format: format375, maxLength: 12 },
    { code: '380', format: format375, maxLength: 12 },
    { code: '994', format: format994, maxLength: 12 },
    { code: '374', format: format374, maxLength: 12 },
    { code: '373', format: format373, maxLength: 12 },
    { code: '993', format: format993, maxLength: 11 },
    { code: '995', format: format995, maxLength: 12 },
    { code: '996', format: format995, maxLength: 12 },
    { code: '992', format: format992, maxLength: 12 },
  ];

  for (const { code, format, maxLength } of rules) {
    if (digits.startsWith(code)) {
      const trimmed = digits.slice(0, maxLength);
      return format(trimmed);
    }
  }

  // По умолчанию — максимум 15 цифр (международный стандарт)
  return '+' + digits.slice(0, 15);
};


const formatRU = (digits: string) => {
  let res = '+7';
  const op = digits.slice(1, 4);
  const a = digits.slice(4, 7);
  const b = digits.slice(7, 9);
  const c = digits.slice(9, 11);
  if (op) res += ` (${op}`;
  if (op.length === 3) res += ')';
  if (a) res += ` ${a}`;
  if (b) res += `-${b}`;
  if (c) res += `-${c}`;
  return res;
};

const format375 = (digits: string) => {
  const code = digits.slice(0, 3);
  const op = digits.slice(3, 5);
  const a = digits.slice(5, 8);
  const b = digits.slice(8, 10);
  const c = digits.slice(10, 12);
  let res = `+${code}`;
  if (op) res += ` (${op}`;
  if (op.length === 2) res += ')';
  if (a) res += ` ${a}`;
  if (b) res += `-${b}`;
  if (c) res += `-${c}`;
  return res;
};

const format994 = (digits: string) => {
  const code = digits.slice(0, 3);
  const op = digits.slice(3, 5);
  const rest = digits.slice(5);
  let res = `+${code}`;
  if (op) res += ` (${op}`;
  if (op.length === 2) res += ')';
  if (rest.length > 0) {
    res += ' ' + rest.slice(0, 3);
    if (rest.length > 3) res += '-' + rest.slice(3, 6);
    if (rest.length > 6) res += '-' + rest.slice(6);
  }
  return res;
};

const format374 = format994;
const format373 = format994;
const format993 = (digits: string) => {
  const code = digits.slice(0, 3);
  const op = digits.slice(3, 5);
  const rest = digits.slice(5);
  let res = `+${code}`;
  if (op) res += ` (${op}`;
  if (op.length === 2) res += ')';
  if (rest) {
    if (rest.length <= 2) res += ' ' + rest;
    else if (rest.length <= 4) res += ' ' + rest.slice(0, 2) + '-' + rest.slice(2);
    else if (rest.length <= 6) res += ' ' + rest.slice(0, 2) + '-' + rest.slice(2, 4) + '-' + rest.slice(4);
    else res += ' ' + rest.slice(0, 2) + '-' + rest.slice(2, 4) + '-' + rest.slice(4, 6) + '-' + rest.slice(6);
  }
  return res;
};

const format995 = (digits: string) => {
  const code = digits.slice(0, 3);
  const op = digits.slice(3, 6);
  const rest = digits.slice(6);
  let res = `+${code}`;
  if (op) res += ` (${op}`;
  if (op.length === 3) res += ')';
  if (rest.length > 0) res += ' ' + rest.slice(0, 3);
  if (rest.length > 3) res += '-' + rest.slice(3);
  return res;
};

const format992 = (digits: string) => {
  const code = digits.slice(0, 3);
  const op = digits.slice(3, 5);
  const a = digits.slice(5, 8);
  const b = digits.slice(8);
  let res = `+${code}`;
  if (op) res += ` (${op}`;
  if (op.length === 2) res += ')';
  if (a) res += ' ' + a;
  if (b) res += '-' + b;
  return res;
};