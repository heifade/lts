/**
 * 用空格把一个字符串分割成字符串数组
 * @param {string} str 源字符串.
 * @returns {string[]} 返回分隔后的字符串数组.
 */
function split(str: string): string[];
/**
 * 用指定字符串把一个字符串分割成字符串数组
 * @param {string} str 源字符串.
 * @param {string} separator 根据此字符串分隔
 * @returns {string[]} 返回分隔后的字符串数组.
 */
function split(str: string, separator: string): string[];
/**
 * 用正则表达式把一个字符串分割成字符串数组
 * @param {string} str 源字符串.
 * @param {string} separator 正则表达式
 * @returns {string[]} 返回分隔后的字符串数组.
 */
function split(str: string, separator: RegExp): string[];
function split(str: string, separator: RegExp | string = " "): string[] {
  if (typeof separator === "string") {
    return str.split(separator);
  } else if (separator instanceof RegExp) {
    return str.split(separator);
  } else {
    throw new Error(`${separator}应为string 或 RegExp!`);
  }
}

let list11 = split("123 456");
let list12 = split("123,456", ",");
let list13 = split("123,456", /,/);
