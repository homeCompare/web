import axios from 'axios';

export const upsertHomeToDb = async (editedHome, editId) => {
  try {
    const response = await axios.post(
      '/api/home/upsert',
      { editedHome, editId },
      { withCredentials: true }
    );
    return [];
  } catch (error) {
    console.error('failed to upsert', { error });
    return error;
  }
};
export const deleteHomeFromDb = async (homeId) => {
  try {
    const response = await axios.post(
      '/api/home/delete',
      { homeId },
      { withCredentials: true }
    );
    return [];
  } catch (error) {
    console.error('failed to delete', { error });
    return error;
  }
};
