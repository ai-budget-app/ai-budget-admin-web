export const USER_ROLES = {
  GUEST: 'guest', // Неавторизованный пользователь
  USER: 'user', // Обычный пользователь
};

// Для проверки доступа
export const checkRole = (userRole, allowedRoles) => {
  if (!allowedRoles || allowedRoles.length === 0) {
    return true; // Если роли не указаны - доступ для всех
  }
  return allowedRoles.includes(userRole);
};
