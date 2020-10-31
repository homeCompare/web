/* eslint-disable import/prefer-default-export */
// base 64 conversion function
export const toBase64 = file => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-undef
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
