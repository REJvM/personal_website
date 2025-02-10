export default function (string: String): String {
  string = string.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  string = string.toLowerCase(); // convert string to lowercase
  string = string
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return string;
}
