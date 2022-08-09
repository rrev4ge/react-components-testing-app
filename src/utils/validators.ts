const isUUID = (uuid: string) => {
  const s = `${uuid}`;
  const v = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
  if (v === null) {
    return false;
  }
  return true;
};

export default { isUUID };
