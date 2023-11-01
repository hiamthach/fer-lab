import { REGEX_YOUTUBE_WATCH_URL } from '../constants/regex.const';

const stringHelper = {
  convertToEmbedYoutube: (url: string) => {
    if (REGEX_YOUTUBE_WATCH_URL.test(url)) {
      const id = url.split('v=')[1];

      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  },
};

export default stringHelper;
