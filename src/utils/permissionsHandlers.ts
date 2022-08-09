const roleValidation = (roles: any[] | undefined, profile): boolean => {
  if (!roles) {
    return true;
  }
  return roles.some((role) => profile?.roles!.includes(role));
};

export default { roleValidation };
