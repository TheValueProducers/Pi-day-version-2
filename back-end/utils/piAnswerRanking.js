const fs = require('fs');
const path = require('path');

function processPiResponses(responses) {
    return new Promise((resolve, reject) => {
        const pathName = path.resolve(__dirname, "pi_numbers.txt");
        
        fs.readFile(pathName, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading pi_numbers.txt:', err);
                reject(err);
                return;
            }
            
            const PI_DIGITS = data.replace(/\s+/g, '').substring(0, 15000);
            
            function countCorrectDigits(userAnswer) {
                for (let i = 0; i < userAnswer.length; i++) {
                    if (userAnswer[i] !== PI_DIGITS[i]) {
                        return i; // Return the number of correct digits
                    }
                }
                return userAnswer.length; // If all are correct
            }

            let results = responses.map(({ student_id, username, answer }) => {
                const correct_digits = countCorrectDigits(answer);
                return { student_id, username, answer, correct_digits };
            });

            // Sort results based on correct_digits in descending order
            results.sort((a, b) => b.correct_digits - a.correct_digits);
            
            // Assign ranks (handling ties properly)
            let rank = 1;
            for (let i = 0; i < results.length; i++) {
                if (i > 0 && results[i].correct_digits < results[i - 1].correct_digits) {
                    rank = i + 1;
                }
                results[i].rank = rank;
            }

            resolve(results);
        });
    });
}

module.exports = processPiResponses;
