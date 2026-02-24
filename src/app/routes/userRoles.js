export const USER_ROLES = {
  USER: 'user', // Обычный пользователь
  ADMIN: 'admin', // Администратор
};

// Для проверки доступа
export const checkRole = (userRole, allowedRoles) => {
  if (!allowedRoles || allowedRoles.length === 0) {
    return true; // Если роли не указаны - доступ для всех
  }
  return allowedRoles.includes(userRole);
};
