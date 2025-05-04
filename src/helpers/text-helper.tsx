export class TextHelper {
  public static removeSpecialChars(text: string): string {
    return text.replace(/[^a-zA-Z0-9 ]/g, " ").trim();
  }

  public static capitalize(text: string): string {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
