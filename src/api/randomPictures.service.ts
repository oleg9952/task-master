export class RandomPicturesService {
  public static async getRandomPic() {
    try {
      const { url } = await fetch("https://picsum.photos/700/500");
      return { url };
    } catch (error) {
      console.error(error);
      return { url: "" };
    }
  }
}
