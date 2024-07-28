import inquirer from 'inquirer';

const countCharactersAndWords = (text: string) => {
  const characters = text.replace(/\s+/g, ''); // Remove all whitespaces
  const words = text.trim().split(/\s+/); // Split by whitespace to get words

  return {
    characterCount: characters.length,
    wordCount: words.length
  };
};

(async () => {
  const { paragraph } = await inquirer.prompt([
    {
      type: 'input',
      name: 'paragraph',
      message: 'Enter an English paragraph:'
    }
  ]);

  const { characterCount, wordCount } = countCharactersAndWords(paragraph);

  console.log(`\nNumber of characters (excluding whitespaces): ${characterCount}`);
  console.log(`Number of words: ${wordCount}\n`);
})();
