import axios from 'axios';

export const upsertHomeToDb = async (userId, editedHome, editId) => {
  try {
    const response = await axios.post('/api/home/upsert', {userId, editedHome, editId});
    return [];
  } catch (error) {
    console.error('failed to upsert', {error});
    return error;
  }
};
export const deleteHomeFromDb = async (userId, homeId) => {
  try {
    const response = await axios.post('/api/home/delete', {userId, homeId});
    return [];
  } catch (error) {
    console.error('failed to delete', {error});
    return error;
  }
};
