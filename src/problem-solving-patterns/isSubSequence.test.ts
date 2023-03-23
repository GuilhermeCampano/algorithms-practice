import { isSubsequence } from "./isSubSequence";

describe("isSubsequence", () => {
  it("should return true if string1 is a subsequence of string2", () => {
    expect(isSubsequence("hello", "hello world")).toBeTruthy();
  });
  it("should return false if string1 is not a subsequence of string2", () => {
    expect(isSubsequence("hallo", "hello world")).toBeFalsy();
  });
  it("should return true if string1 is empty", () => {  
    expect(isSubsequence("", "hello world")).toBeTruthy();
  });
  it("should return false if string2 is empty", () => {  
    expect(isSubsequence("hello", "")).toBeFalsy();
  });
  it("should return false if string1 is longer than string2", () => {  
    expect(isSubsequence("hello world", "hello")).toBeFalsy();
  });
  it("should return false if string1 is not a subsequence of string2", () => {  
    expect(isSubsequence("abc", "hello")).toBeFalsy();
  });
})
