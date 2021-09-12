import { axiosInstaceUpload } from "../../shared/AxiosInstance";

export function uploadService(file, tags) {
  return new Promise((resolve, reject) =>
    axiosInstaceUpload
      .post("/", {
        file,
        tags,
      })
      .then((data) => resolve(data))
      .catch((e) => reject(e))
  );
}
