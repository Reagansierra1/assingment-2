const { totalWords, totalLines, findLongestWord } = require("../src/textAnalyzer");

test("Total words counts correctly", () => {
    const text = "Hello world! This is Jest.";
    expect(totalWords(text)).toBe(5);
});

test("Total words counts correctly", () => {
    const text = "Hello world! This is Jest.";
    expect(totalWords(text)).toBe(5);
});


test("countLines counts lines correctly", () => {
    const text = "Line1\nLine2\nLine3";
    expect(totalLines(text)).toBe(3);
});

test("findLongestWord returns the longest word", () => {
    const text = "I love programming in JavaScript";
    expect(findLongestWord(text)).toBe("programming");
});