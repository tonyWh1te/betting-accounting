const API_BASE_URL = 'https://24b75c475d0a918a.mokky.dev';

const errosByCode = {
  400: 'Некорректные данные',
  404: 'Ресурс не найден',
  401: 'Неправильный логин или пароль',
  500: 'Внутренняя ошибка сервера',
  408: 'Сервер не отвечает',
  default: 'Что-то пошло не так',
};

export { API_BASE_URL, errosByCode };
