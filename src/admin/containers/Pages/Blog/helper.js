import axios from "../../../../store/helpers/axios";

export const uploadCallback = (file) => {
  console.log(file);
  const formData = new FormData();
  formData.append("blogImage", file);
  return new Promise((resolve, reject) => {
    axios
      .post("/admin/uploadImage", formData)
      .then((res) => {
        resolve({ data: { link: res.data.data } });
      })
      .catch((error) => {
        reject(error.toString());
      });
  });
};
