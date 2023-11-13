const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000/api" : "https://movie-iamerfan.vercel.app/api";

export const fetchFromServer = async (route, method, userOptions) => {
  const url = `${server}/${route}`;

  const initialOptions = {
    method: method || "GET",
  };

  const options = {
    ...initialOptions,
    ...userOptions,
  };
  return await fetch(url, options).then((res) => res.json());
};

export const handleImgUrl = (item, type, q) => {
  const handleUrl = () => {
    switch (type) {
      case "backdrop":
        return item.backdrop_path;
      case "poster":
        return item.poster_path;
      case "profile":
        return item.profile_path;
      case "file":
        return item.file_path;
      case "still":
        return item.still_path;
      default:
        return null;
    }
  };
  return `/img/${q || "original"}${handleUrl()}`;
};

export const isNull = (value) => (value === null ? true : false);

export const handleImageType = (title) => {
  switch (title) {
    case "Images":
      return "file";
    case "Cast":
      return "profile";
    case "Crew":
      return "profile";
    case "Guest":
      return "profile";
    case "Discover":
      return "poster";
    case "Seasons":
      return "still";

    default:
      return "poster";
  }
};
export const handleValid = (item) => {
  if (!item.profile_path && !item.file_path && !item.poster_path) return false;
  return true;
};

export const handleTime = (value) => {
  const str = value.release_date || value.first_air_date;
  return str ? str.split("-")[0] : "N/A";
};
