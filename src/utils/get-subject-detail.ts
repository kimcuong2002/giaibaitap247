export function getSubjectDetail(_id?: string) {
  if (!_id) return '';

  return import.meta.env.VITE_API_SUBJECT + _id;
}
