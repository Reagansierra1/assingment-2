const { totalWords, totalLines, findLongestWord } = require("../src/textAnalyzer");

test("TotalWords: Total words counts correctly", () => {
    const text = "Hello world! This is Jest.";
    expect(totalWords(text)).toBe(5);
});

test("TotalWords: Multiple Spaces", () => {
    const text = "This is  a test.";
    expect(totalWords(text)).toBe(4);
});

test("TotalWords: New line,literal character", () => {
    const text = "This is\na test.";
    expect(totalWords(text)).toBe(4);
});

test("TotalWords: Empty String", () => {
    const text = "";
    expect(totalWords(text)).toBe(0);
});


test("TotalLines: count lines correctly", () => {
    const text = "Line1\nLine2\nLine3";
    expect(totalLines(text)).toBe(3);
});

test("TotalLines: Empty String", () => {
    const text = "";
    expect(totalLines(text)).toBe(0);
});

test("TotalLines: Single line with no new line", () => {
    const text = "Line1";
    expect(totalLines(text)).toBe(1);
});

test("TotalLines: Consecutive new lines", () => {
    const text = "Line1\n\n";
    expect(totalLines(text)).toBe(3);
});

test("TotalLines: only newlines", () => {
    const text = "\n\n";
    expect(totalLines(text)).toBe(3);
});

test("findLongestWord: returns the longest word", () => {
    const text = "I love pancakes";
    expect(findLongestWord(text)).toBe("pancakes");
});

test("findLongestWord: empty string", () => {
    const text = "";
    expect(findLongestWord(text)).toBe("");
});

test("findLongestWord: single word", () => {
    const text = "I";
    expect(findLongestWord(text)).toBe("I");
});

test("findLongestWord: words of same length", () => {
    const text = "pool cool";
    expect(findLongestWord(text)).toBe("pool");
});

test("findLongestWord: punctuation included", () => {
    const text = "I love pancakes!";
    expect(findLongestWord(text)).toBe("pancakes");
});