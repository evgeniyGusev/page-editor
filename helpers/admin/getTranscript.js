export const getTranscript = (string) => {
	const locales = {
		'а':'a',
		'б':'b',
		'в':'v',
		'г':'g',
		'д':'d',
		'е':'e',
		'ё':'yo',
		'ж':'zh',
		'з':'z',
		'и':'i',
		'й':'i',
		'к':'k',
		'л':'l',
		'м':'m',
		'н':'n',
		'о':'o',
		'п':'p',
		'р':'r',
		'с':'s',
		'т':'t',
		'у':'u',
		'ф':'f',
		'х':'h',
		'ц':'ts',
		'ч':'ch',
		'ш':'sh',
		'щ':'sch',
		'ъ':'\'',
		'ы':'i',
		'ь':'\'',
		'э':'e',
		'ю':'yu',
		'я':'ya'
	};

	const lowerString = string.toLowerCase();

	return lowerString
		.split('')
		.map((char) => {
			return locales[char] || char;
		})
		.join('')
		.replaceAll(/\W/g, '_');
}
