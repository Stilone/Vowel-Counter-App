export const compare = (ruText, enTextWithComments) => {
    let equalPairs = [];
    let nonLetters = [' ', ',', '.', ':', '-', ';', '\'']
    for (let i = 0; i < ruText.length; i++) {
        let ruStringIndex = 0;
        let ruLetterIndex = 0.5;
        for (let j = 0; j < ruText[i].length; j++) {
            if (!nonLetters.includes(ruText[i][j])) {
                ruStringIndex += ruLetterIndex;
                ruLetterIndex += 1;
            }
        }



        for (let k = 0; k < enTextWithComments.length; k++) {
            let enStringIndex = 0;
            let enLetterIndex = 0.5;
            let enCommentIndex = 0;
            let commentLetterIndex = 0.5;
            let enText = enTextWithComments[k].split('|')[0];
            let comment = enTextWithComments[k].split('|')[1];
            for (let n = 0; n < enText.length; n++) {
                if (!nonLetters.includes(enText[n])) {
                    enStringIndex += enLetterIndex;
                    enLetterIndex += 1;
                }
            }
            for (let m = 0; m < comment.length; m++) {
                if (!nonLetters.includes(comment[m])) {
                    enCommentIndex += commentLetterIndex;
                    commentLetterIndex += 1;
                }
            }
            if (enCommentIndex > 0.5) {
                if (ruStringIndex === enStringIndex + enCommentIndex) {
                    equalPairs.push({
                        ruText: ruText[i],
                        enText: enTextWithComments[k]
                    });
                }
            }
        }
    }
    return equalPairs;
}
